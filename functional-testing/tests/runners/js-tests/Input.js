const { waitForElementVisibility } = require("../../../methods/VisibilityOf");
const { expectedText } = require("../../../methods/ExpectedText");
const assert = require('assert').strict;

async function filtrareDetalii(driver, By, until){
    try{
    
        await driver.sleep(1000);

        await driver.findElement(By.id('inp-detalii')).sendKeys('peste');

        await driver.sleep(1000);


        await driver.findElement(By.id('filtrare')).click();

        await driver.sleep(1000);

        await driver.wait(until.elementLocated(By.className('produs')), 5000);

        await driver.sleep(1000);

        let produseFiltrate = await driver.findElements(By.className('produs'));
        //let numberOfFilteredProducts = produseFiltrate.length;
        //console.log('Number of filtered products:', numberOfFilteredProducts);  

        await driver.sleep(1000);

        let expectedResult = true;
        let nr = 0;
        for (let produs of produseFiltrate) {
            if(await produs.isDisplayed()){
                nr = nr + 1;
                let detaliiProdus = await produs.findElement(By.className('val-detalii')).getText();
                //console.log(produs)
                let cuvinteDetalii = detaliiProdus.toLowerCase().split(/[^\w]+/); //non-word char separatori
                let found = false;

                for (let cuvant of cuvinteDetalii) {
                    //console.log(cuvant);
                    if (cuvant == 'peste') {
                        found = true;
                        break;
                    }
                }

                if (nr == 2) {
                    await driver.sleep(2000);
                    await driver.executeScript(`window.scrollBy(0, 760)`);
                    nr = 0;
                }

                if (found == false) {
                    expectedResult = false;
                    break;
                }
        }
        }



        assert.ok(expectedResult, 'Error filtering products');
        console.log("Filtering products successfully!");

        await driver.findElement(By.css("#link-top")).click();

        await driver.sleep(1000);

    }finally{

    }
}

module.exports = {
    filtrareDetalii
};