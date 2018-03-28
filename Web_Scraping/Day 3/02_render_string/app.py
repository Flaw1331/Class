# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)


# 
@app.route("/")
def echo():
    # text => is a variable on html page
    stuff = input("Show me what you got: \n")
    return render_template("index.html", text=stuff)

if __name__ == "__main__":
    app.run(debug=True)
