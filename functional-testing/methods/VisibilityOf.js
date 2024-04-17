async function waitForElementVisibility(driver, element, timeout) {
  try {
    const { until } = require('selenium-webdriver');
    console.log('Waiting for element visibility...');
    await driver.wait(until.elementIsVisible(element), timeout);
    console.log('Element is visible.');
    return true; 
  } catch (error) {
    console.error('Error while waiting for element visibility:', error);
    return false;
  }
}

module.exports = {
    waitForElementVisibility
  };
