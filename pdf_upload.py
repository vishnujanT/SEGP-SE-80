app.route("/upload", methods=["POST"])
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
        encoded_pdf_data = base64.b64encode(modified_pdf_data).decode('utf-8')

        # Return the translated PDF and summarized text to the client
        return jsonify({
            "translated_pdf_data": encoded_pdf_data,
            "summarized_text": summary
        })
