async function startPage(driver, By, until) {

  try {

    try {
      await driver.wait(until.elementLocated(By.css("#text > em")), 10000);
    } catch (error) {
      console.error("Timeout error: Element with selector '#text > em' not found within the specified timeout.");
    }

    await driver.sleep(1000);

    try{
      const textEmElement = await driver.findElement(By.css("#text > em"));
    }catch(error) {
      console.error("NoSuchElementError: Element with selector '#text > em' not found in page.")
    }

    await driver.sleep(1000);

    try{
      await driver.wait(until.elementLocated(By.css("body > nav > ul > li:nth-child(6) > div")), 10000);

      const hoverElement = await driver.executeScript(
        `return document.querySelector("body > nav > ul > li:nth-child(6) > div")`
      );

      driver.sleep(2000);
  
      await hoverElement.click();

      await driver.sleep(1000);

    } catch (error) {
      console.error("Timeout error: Element with selector 'body > nav > ul > li:nth-child(6) > div' not found within the specified timeout.");
    }

    await driver.sleep(1000);

    try{
      await driver.wait(until.elementLocated(By.css("body > nav > ul > li:nth-child(6) > ul > li > a")), 10000);

      const clickElement = await driver.executeScript(
          `return document.querySelector("body > nav > ul > li:nth-child(6) > ul > li > a")`
        );

      await clickElement.click();
    } catch(error)
    {
      console.error("Timeout error: Element with selector 'body > nav > ul > li:nth-child(6) > ul > li > a' not found within the specified timeout.");
    }

    await driver.sleep(1000);
    
    await driver.sleep(2000);
  } finally {

  }
}

module.exports = {
    startPage
};