from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
import scrape_craigslist

app = Flask(__name__)
mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template("index.html", 
      listings=[listing for listing in mongo.db.listings.find()])


@app.route("/scrape")
def scrape():
    mongo.db.listings.drop()
    listings = mongo.db.listings    
    listings_data = scrape_craigslist.scrape()
    for listing in listings_data:
        listings.insert_one(listing)
    return redirect("http://localhost:5000/", code=302)


if __name__ == "__main__":
    app.run(debug=True)
