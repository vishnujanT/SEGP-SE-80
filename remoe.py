import os
import fitz
from flask import Flask, request, send_file
from flask_cors import CORS

app = Flask(__name__)


# CORS(app)
CORS(app, resources={r"/remove-watermark": {"origins": "*"}})

def remove_watermark(pdf_path, output_path):
    doc = fitz.open(pdf_path)
    for page in doc:
        page.clean_contents()
        xref = page.get_contents()[0]
        cont = bytearray(page.read_contents())
        while True:
            i1 = cont.find(b"/Fm0 Do")
            if i1 < 0:
                break
            i2 = cont.find(b"Q", i1)
            cont[i1 : i2 + 1] = b""
        doc.update_stream(xref, cont)
    doc.save(output_path)
