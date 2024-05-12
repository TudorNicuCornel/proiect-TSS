const assert = require('assert').strict;

async function pretMin(driver, By, until){
    try{

        let rangeInput = await driver.findElement(By.css("#inp-pret"));

        await driver.sleep(1000);

        await driver.executeScript("arguments[0].value = 100;", rangeInput);

        await driver.sleep(1000);

        let butonPretMin = await driver.findElement(By.css("#pretMin"));

        await driver.sleep(1000);

        await butonPretMin.click();

        await driver.sleep(1000);

        let produseFiltrate = await driver.findElements(By.className('produs'));

        let expectedResult = true;
        let nr = 0;
        for (let produs of produseFiltrate) {
            if(await produs.isDisplayed()){
                nr = nr + 1;
                let detaliiProdus = await produs.findElement(By.className('val-pret')).getText();

                if(detaliiProdus <100)
                    expectedResult = false;

                if (nr == 2) {
                    await driver.sleep(2000);
                    await driver.executeScript(`window.scrollBy(0, 760)`);
                    nr = 0;
                }
        }
        }

        assert.ok(expectedResult, 'SortError: Function Pret-Mon failed');

        await driver.sleep(1000);

        await driver.findElement(By.css("#link-top")).click();


        console.log("Sucess Pret-Min function!")

        //await driver.sleep(5000);
    
    }finally{

    }
}

module.exports = {
    pretMin
};