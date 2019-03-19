const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');



(async function loginFail() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    driver.get('http://localhost:3000');
    await sleep(3000);
    driver.findElement(By.name('username')).sendKeys('Blanc', Key.RETURN);
    driver.findElement(By.name('password')).sendKeys('Barr', Key.RETURN);
    await sleep(1000);
    driver.findElement(By.id('submit')).click();
    await sleep(3000);
    let URL = await driver.getCurrentUrl();
    assert(URL === "http://localhost:3000/Files" );
    console.log("Logged In succsessfully");
    // await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
  } catch (err) {
    //do a thing
    console.log("Correctly blocked login and did not navigate from page");
  }
  
  finally {
    driver.quit();
  }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}