import base64
import io
import os
import tempfile

import fitz  # PyMuPDF
import requests

from flask import Flask, Response, jsonify, request
from flask_cors import CORS
from transformers import MBart50TokenizerFast, MBartForConditionalGeneration
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)


model = MBartForConditionalGeneration.from_pretrained(
    "facebook/mbart-large-50-one-to-many-mmt"
)

tokenizer = MBart50TokenizerFast.from_pretrained(
    "facebook/mbart-large-50-one-to-many-mmt", src_lang="en_XX"
)

SUMMARIZATION_SERVER_URL = "http://localhost:8999/summarize"


def remove_watermark(pdf_path, output_path):
    doc = fitz.open(pdf_path)

    for page in doc:
        # Standardize the page's content stream
        page.clean_contents()
        xref = page.get_contents()[0]  # Get the xref of the resulting /Contents object
        cont = bytearray(
            page.read_contents()
        )  # Read the contents source as a modifyable bytearray

        # Find and remove the watermark
        while True:
            i1 = cont.find(b"/Fm0 Do")  # Start of the watermark definition
            if i1 < 0:
                break  # No more watermarks left
            i2 = cont.find(b"Q", i1)  # End of the watermark definition
            cont[i1 : i2 + 1] = b""  # Remove the watermark definition

        # Update the content stream
        doc.update_stream(xref, cont)

    # Save the modified document
    doc.save(output_path)


def english_to_tamil(article_en):
    model_inputs = tokenizer(article_en, return_tensors="pt")
    # translate from English to Tamil
    generated_tokens = model.generate(
        **model_inputs, forced_bos_token_id=tokenizer.lang_code_to_id["ta_IN"]
    )
    translation = tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
    # Join the list of strings into a single string
    tamil_text = " ".join(translation)
    return tamil_text


def send_to_summarization_server(text_list):
    # Join the list of strings into a single string
    text = " ".join(text_list)

    # Send the text to the summarization server
    data = {"text": text}
    response = requests.post(SUMMARIZATION_SERVER_URL, json=data)
    response.raise_for_status()  # Raise an exception if the request failed

    # Get the summary from the response
    summary = response.json().get("summary")
    return summary


@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return "No file part", 400
    file = request.files["file"]
    if file.filename == "":
        return "No selected file", 400
    if file:
        # Use secure_filename to ensure a safe filename
        filename = secure_filename(file.filename)

        # Save the uploaded file to a temporary location
        file_path = os.path.join(tempfile.gettempdir(), filename)
        file.save(file_path)

        # Remove watermark from the PDF
        watermark_removed_path = os.path.join(
            tempfile.gettempdir(), "watermark_removed.pdf"
        )
        remove_watermark(file_path, watermark_removed_path)

        # Process the PDF with your script
        translated_text, modified_pdf_data = process_pdf(watermark_removed_path)

        # Send the translated text to the summarization server
        summary = send_to_summarization_server(translated_text)

        # Encode the modified PDF data as base64
        encoded_pdf_data = base64.b64encode(modified_pdf_data).decode("utf-8")

        # Return the translated PDF and summarized text to the client
        return jsonify(
            {"translated_pdf_data": encoded_pdf_data, "summarized_text": summary}
        )


def process_pdf(file_path):
    doc = fitz.open(file_path)
    translated_text = []
    for page in doc:
        details = page.get_text("dict", flags=fitz.TEXTFLAGS_TEXT)  # skips images!
        for block in details["blocks"]:  # delivers the block level
            for line in block["lines"]:  # the lines in this block
                bbox = fitz.Rect(line["bbox"])  # wraps this line
                line_text = "".join([span["text"] for span in line["spans"]])
                page.add_redact_annot(bbox)

                page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE)

                result = english_to_tamil(line_text)
                tamil_text = result
                print(tamil_text)
                translated_text.append(tamil_text)

                # Insert the Tamil text into the rectangle
                page.insert_htmlbox(
                    bbox,
                    tamil_text,
                    css="* {font-family: sans-serif; font-size:11px;}",
                )

    # Save the modified PDF
    doc.save("modified.pdf", garbage=4, deflate=True, linear=True)
    # Read the modified PDF file data
    with open("modified.pdf", "rb") as f:
        modified_pdf_data = f.read()

    return translated_text, modified_pdf_data


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
