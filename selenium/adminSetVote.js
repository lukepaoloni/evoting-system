const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');



(async function adminSetVote() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    driver.get('http://localhost:3000');
    await sleep(3000);
    driver.findElement(By.id('loginButton')).click();
    await sleep(3000);
    driver.findElement(By.name('username')).sendKeys('Rayne', Key.RETURN);
    driver.findElement(By.name('password')).sendKeys('password1', Key.RETURN);
    await sleep(1000);
    driver.findElement(By.id('login')).click();
    await sleep(3000);
    driver.findElement(By.name('endDate')).click();
    await sleep(6000);
    const URL = await driver.getCurrentUrl();

    assert(URL === "http://localhost:3000/vote" );
    console.log("Logged In succsessfully");
  } catch (err) {
    console.log("Failed assertion of Succsessfull Login");
    console.log(err);
  }
  
  finally {
    driver.quit();
  }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}