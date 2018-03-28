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


def scrape():
    browser = init_browser()
    listings = []

    url = "https://kansascity.craigslist.org/search/hhh?max_price=1500&availabilityMode=0"
    browser.visit(url)
    time.sleep(1)

    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

    results = soup.find_all('li', class_="result-row")
    for result in results:
        try:
            title = result.find('a', class_="result-title").text
            price = result.a.span.text
            link = result.a['href']

            if (title and price and link):
                listing = {}
                listing['title'] = title
                listing['price'] = price
                listing['link'] = link
                listings.append(listing)
        except Exception as e:
            print(e)

    return listings
