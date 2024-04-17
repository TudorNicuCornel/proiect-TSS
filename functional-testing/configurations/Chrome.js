
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;

async function openChrome() {
  const options = new chrome.Options().addArguments("--start-maximized").addArguments("--remote-allow-origins=*");

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:8081/');
  } catch (error) {
    console.error('Error opening Chrome:', error);
  }
}

async function getDriver() {
  if (!driver) {
    await openChrome();
  }
  return driver;
}

module.exports = {
  openChrome,
  getDriver
};