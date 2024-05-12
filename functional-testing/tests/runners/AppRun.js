const { openChrome, getDriver } = require("../../configurations/Chrome");
const { startPage } = require("../../pages/BasePage");
const { productPage } = require("../../pages/ProductPage");
const { filtrareDetalii } = require("../runners/js-tests/Input");
const { pretMin } = require("../runners/js-tests/pretMin");
const { mediePreturi } = require("../runners/js-tests/mediePreturi");

async function runApp() {
  await openChrome();

  const driver = await getDriver();

  const { By, until } = require('selenium-webdriver');

  await startPage(driver, By, until);

  await productPage(driver, By, until);

  await filtrareDetalii(driver, By, until);

  await pretMin(driver, By, until);

  await mediePreturi(driver, By, until);

  driver.quit();
}

runApp();