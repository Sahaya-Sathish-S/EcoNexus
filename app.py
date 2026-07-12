from flask import Flask, render_template, request, jsonify, url_for
import requests
import uuid
import os
import base64
import json
import re

app = Flask(__name__)

# Ensure the static directories exist

@app.route("/")
def loading(): 
    return render_template("loading.html")

@app.route("/home")
def home(): 
    return render_template("home.html")

@app.route("/product")
def product(): 
    return render_template("product.html")
    
if __name__ == "__main__":
    app.run(debug=True)
