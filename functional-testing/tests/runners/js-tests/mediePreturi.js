const assert = require('assert').strict;

async function mediePreturi(driver, By, until){
    try{

        let butoneMedia = await driver.findElement(By.css("#mediaPret"));

        await driver.sleep(1000);

        await butoneMedia.click();

        await driver.sleep(1000);

        //await driver.wait(until.elementLocated(By.css(".media")), 500);
        let mediePreturiSpan = await driver.findElement(By.css(".mediePreturi")).getText();

        await driver.sleep(1000);

        const expectedResult = "94.13";

        let ok = true;

        for (let i = 0; i < expectedResult.length; i++) {
            if (expectedResult[i] !== mediePreturiSpan[i]) {
                ok = false;
                break;
            }
        }

        console.log(mediePreturiSpan);

        
        assert.ok(ok, 'PriceError: Function Media_Preturi failed..');

        console.log("Success Media_preturi function!");

        await driver.sleep(5000);
    
    }finally{

    }
}

module.exports = {
    mediePreturi
};