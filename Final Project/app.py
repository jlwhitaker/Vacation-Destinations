# import dependencies
from flask import Flask, jsonify, render_template, redirect, request, json
import pymongo
import os
import requests
import pandas as pd 
import selenium
from bs4 import BeautifulSoup 
from splinter import Browser
from webdriver_manager.chrome import ChromeDriverManager
from bson import json_util

#impot the scrape function


# Create an app, being sure to pass __name__
app = Flask(__name__)

#################################################
# Database Setup
#################################################
# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database & collection. Will create one if not already available.
db = client.vacations_db

#################################################
# Flask Routes
#################################################

# Define what to do when a user hits the homepage / index route
# Create a root route / that will query your Mongo database and pass the mars data 
# into an HTML template to display the data.


@app.route("/", methods =["GET"])
def index():
    
    # Return the template with the mongodb data passed in
    return render_template('index.html')

@app.route("/api/attractions-data")
def get_attractions_data():
    attractions_db = db.attractions.find()
    attractions_array = []
    for doc in attractions_db:
        attractions_array.append(doc)
    #attractions = jsonify(attractions_array))


    return (json_util.dumps( attractions_array))

@app.route("/api/climate-data")
def get_climate_data():

    climate_db = db.climate.find()
    climate_array = []
    for doc in climate_db:
        climate_array.append(doc)
    #climate = (climate_array))

    return (json_util.dumps(climate_array ))

if __name__ == "__main__":
    app.run(debug=True)