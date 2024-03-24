import os
import fitz
from flask import Flask, request, send_file
from flask_cors import CORS

app = Flask(__name__)
