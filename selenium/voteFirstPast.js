const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');



(async function login() {
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
    driver.findElement(By.xpath('//*[@id="7"]')).click();
    await sleep(3000);

    driver.findElement(By.xpath(`//*[@id="submitVote"]`)).click();

    await sleep(3000);
    driver.findElement(By.xpath(`//*[@id="root"]/div/div[2]/div/div[9]/div/button[1]`)).click();

    await sleep(2000);

    const URL = await driver.getCurrentUrl();
    assert(URL === "http://localhost:3000/success" );
    console.log("Sent Votes using Transferable Style");
  } catch (err) {
    console.log("Failed To Vote");
    console.log(err);
  }
  
  finally {
    driver.quit();
  }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}