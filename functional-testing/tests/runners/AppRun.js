const { openChrome, getDriver } = require("../../configurations/Chrome");
const { startPage } = require("../../pages/BasePage");
const { productPage } = require("../../pages/ProductPage");


async function runApp() {
  await openChrome();

  const driver = await getDriver();

  const { By, until } = require('selenium-webdriver');

  await startPage(driver, By, until);

  await productPage(driver, By, until);

  driver.quit();
}

runApp();