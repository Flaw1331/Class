# 1. Import Flask
from flask import Flask

# 2. Create an app
app = Flask(__name__)

# 3. Define static routes
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return "Welcome to my API thingy!"

@app.route("/about")
def about():
    name = "Yaway"
    location = "Heaven"
    print("Server received request for 'About' page...")
    return f"Name: {name} - Location: {location}"

@app.route("/contact")
def contact():
    email = "Christian.Ensz@gmail.com"
    print("Server received request for 'Contact' page...")
    return f"Email us at: {email}"

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
