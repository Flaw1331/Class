import time
from splinter import Browser
from bs4 import BeautifulSoup
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
    # create surf_data dict that we can insert into mongo
    surf_data = {}
    # visit unsplash.com
    url = 'https://unsplash.com/'
    browser.visit(url)
    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')
    input_field = browser.find_by_css('html body.js-focus-ring div#app div div div.F5xv_ div._11ii- div.RuSEo div._258j4._2sCnE.PrOBO._1CR66 div._2FVCK._1pgnK._3vQsl div div div._2PV-w div._2-RsN div._3PSbf form._3_k_e div._3SDxY input#FEED_HEADER_SEARCH_INPUT.qWUF0')
    input_field[0].fill('surfing')
    search_button = browser.find_by_xpath('/html/body/div/div/div[4]/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div[1]/div[2]/form/div[2]/button')
    search_button.click()
    time.sleep(7)
    html = browser.html
    try:
        # create a soup object from the html
        img_soup = BeautifulSoup(html, "html.parser")
        elem = img_soup.find(id="gridMulti")
        img_src = elem.find("img")["src"]
    except:
        img_src =""

    time.sleep(2)
    # add our src to surf data with a key of src
    surf_data["src"] = img_src
    # visit surfline to get weather report
    weather = "http://www.surfline.com/surf-forecasts/southern-california/santa-barbara_2141"
    browser.visit(weather)
    # grab our new html from surfline
    html = browser.html
    # create soup object from html
    forecast_soup = BeautifulSoup(html, "html.parser")
    report = forecast_soup.find(class_="forecast-outlook")
    surf_report = report.find_all("p")
    surf_report_bullets = report.find_all("li")
    # add it to our surf data dict
    surf_data["report"] = build_report(surf_report)
    bullets = []
    
    for bullet in surf_report_bullets:
        bullets.append(bullet.get_text())
    print(bullets)
    surf_data['bullets'] = bullets
    # return our surf data dict
    return surf_data


# helper function to build surf report
def build_report(surf_report):
    final_report = ""
    for p in surf_report:
        final_report += " " + p.get_text()
        print(final_report)
    return final_report
