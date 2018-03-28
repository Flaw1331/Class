# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)

justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

# create route that renders index.html template
@app.route("/")
def index():
    # return render_template for index.html, and pass in the justice_league_members
    return render_template("index.html", justice_league_members=justice_league_members)

if __name__ == "__main__":
    app.run(debug=True)
