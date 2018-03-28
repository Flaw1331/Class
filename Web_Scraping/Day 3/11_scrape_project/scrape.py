import time
from splinter import Browser
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver
from sys import platform
 

def init_browser():
    if platform == "darwin":
        executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    else:
        executable_path = {'executable_path': 'chromedriver.exe'}
    return Browser("chrome", **executable_path, headless=False)

def scrape_url():
    # create a Browser instance
    browser = init_browser()

    # @TODO
    # 1. create an empty dictionary
    empty_dict = {}

    # 2. visit a url
    url = 'http://www.surfline.com/surf-forecasts/southern-california/santa-barbara_2141'
    
    browser.visit(url)
    time.sleep(1)

    html = browser.html
    
    # 3. scrape it with BeautifulSoup
    soup = BeautifulSoup(html, "html.parser")

    results = soup.find_all('li', class_="result-row")

    # 4. find three specific elements and add them to your dictionary
    empty_dct = {
        
    }



    # 5. return your dictionary
