# import necessary libraries
import numpy as np

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
# @TODO: Setup your database here

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(64))
    petType = db.Column(db.String(64))
    age = db.Column(db.Integer)

    def __repr__(self):
        return '<Pet %r>' % (self.nickname)



@app.before_first_request
def setup():
    # Recreate database each time for demo
    db.drop_all()
    db.create_all()


#################################################
# Routes
#################################################

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


# Query the database and send the jsonified results
# @TODO: Create a route to accept your form data and
# save it to your database    
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        nickname = request.form["petName"]
        petType = request.form["petType"]
        age = request.form["petAge"]
        
        pet = Pet(nickname=nickname, petType=petType, age=age)
        db.session.add(pet)
        db.session.commit()

        return redirect("http://localhost:5000/", code=302)
    return render_template("form.html")


# @TODO: Create a route to send the data needed for your plots
@app.route("/api/pals")
def pals():
    results = db.session.query(Pet.petType, func.count(Pet.petType)).group_by(Pet.petType).all()

    pet_type = [result[0] for result in results]
    age = [result[1] for result in results]


    pet_data = {
        "x": pet_type,
        "y": age,
        "type": "bar"
    }

    return jsonify(pet_data)



if __name__ == "__main__":
    app.run()
