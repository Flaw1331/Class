# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)


# create route that renders index.html template
@app.route("/")
def echo():
    # text => is a variable on html page
    return render_template("index.html", text="hurricanes are a comin")


if __name__ == "__main__":
    app.run(debug=True)
