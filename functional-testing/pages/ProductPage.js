const { waitForElementVisibility } = require("../methods/VisibilityOf");
const { expectedText } = require("../methods/ExpectedText");
const assert = require('assert').strict;

async function productPage(driver, By, until){
    try{
        let productPageContainer;
        try{
            productPageContainer = await driver.findElement(By.css("#produse"));
        }catch (error) {
            console.error("Timeout error: Element with selector '#produse' not found within the specified timeout.");
        }

        const isElementVisible = await waitForElementVisibility(driver, productPageContainer, 1200);

        assert.ok(isElementVisible, 'NoSuchContainer: Product page container not found');

        let detaliiLabel; 
        try{
            detaliiLabel = await driver.findElement(By.css("body > main > label:nth-child(1)"));
        }catch(error){
            console.error("Timeout error: Element with selector 'body > main > label:nth-child(1)' not found.");
        }

        const actualText = await detaliiLabel.getText();

        const expectedTxt = 'Detalii:';

        const expectedResult = await expectedText(actualText, expectedTxt);

        assert.ok(expectedResult, 'Label text has a typo: ' + actualText);

    }finally{

    }
}

module.exports = {
    productPage
};