'use strict'
const fs = require('fs')
const path = require('path')
const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until
const promisify = require('./util/promisify')

// probably 192.168.99.100 on Mac, and 127.0.0.1 on Unix-like systems
const dockerHostIp = '192.168.99.100'

const driver = new webdriver.Builder()
  .forBrowser('firefox')
  .usingServer(`http://${dockerHostIp}:4444/wd/hub`)
  .build()

loadGoogle(driver)
  .then(() => takeScreenshot(driver, 'googleLoaded'))
  .then(() => submitSearch(driver, 'selenium'))
  .then(() => takeScreenshot(driver, 'searchSent'))
  .then(() => driver.quit())
  .then(() => process.exit(0))

function loadGoogle (driver) {
  return driver.get('https://www.google.com/')
    .then(() => driver.wait(until.elementLocated(By.name('q')), 60 * 1000))
}

function submitSearch (driver, search) {
  return driver.findElement(By.name('q'))
    .then(searchBox => searchBox.sendKeys(search) && searchBox.submit())
    .then(() => driver.wait(until.elementLocated(By.id('resultStats')), 60 * 1000))
}

function takeScreenshot (driver, name) {
  name = name || 'screenshot'
  const filename = path.join(__dirname, `/screenshots/${new Date().getTime()}_${name}.png`)
  console.log('takeScreenshot', filename)

  return driver.takeScreenshot()
    .then(image => promisify(fs.writeFile)(filename, image, 'base64')
}
