const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');


(async function testLanguage() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    driver.get('http://localhost:3000');
    await sleep(3000);
    driver.findElement(By.id('options')).click();
    await sleep(3000);
    driver.findElement(By.id('changeLangDE')).click();
    await sleep(3000);
    //title-header
    const headerText = driver.findElement(By.id('title-header')).getText();
    await sleep(1000);

    assert(headerText === "Über E-Voting");

    console.log("Success assertion of testLanguge");
  } catch (err) {
    console.log("Failed assertion of testLanguage");
    console.log(err);
  }
  
  finally {
    driver.quit();
  }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}