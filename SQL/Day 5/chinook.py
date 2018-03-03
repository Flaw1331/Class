# @TODO: Import Dependencies Here
import datetime as dt
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///databases/chinook.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the invoices and invoice_items tables
Invoices = Base.classes.invoices

# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################


@app.route("/")
def welcome():
     """List all available api routes."""
     return (
         f"Avalable Routes:<br/>"
         f"/api/v1.0/countries - List of Countries<br/>"

         f"/api/v1.0/countries/invoice/totals"
         f"- List of invoice totals per country<br/>"

         f"/api/v1.0/postalcodes/&ltcountry&gt"
         f"- Billing Postal Codes for a given country (defaults to 'USA')<br/>"

         f"/api/v1.0/invoice/total/&ltcountry&gt"
         f"- Invoice Total for a given country (defaults to 'USA')<br/>"

         f"/api/v1.0/postalcodes/totals/&ltcountry&gt"
         f"- Invoice totals per postal code for a given country (defaults to 'USA')<br/>"
     )


@app.route("/api/v1.0/countries")
def countries():
    """Return a list of countries"""
    # Query all invoices
    results = session.query(Invoices).all()
    all_Invoices = list(np.ravel(results))

    # Create a dictionary from the row data
    all_countries = []
    for item in all_Invoices:
        countries_dict = {}
        countries_dict["BillingCountry"] = item.BillingCountry
        
        all_countries.append(countries_dict)
    unique_countries = np.unique(all_countries)
    return jsonify(unique_countries)


if __name__ == '__main__':
    app.run(debug=True)