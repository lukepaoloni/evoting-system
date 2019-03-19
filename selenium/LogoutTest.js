const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');



(async function Logout() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    driver.get('http://localhost:3000');
    await sleep(3000);
    driver.findElement(By.name('username')).sendKeys('Blanc', Key.RETURN);
    driver.findElement(By.name('password')).sendKeys('Berry', Key.RETURN);
    await sleep(1000);
    driver.findElement(By.id('submit')).click();
    await sleep(3000);
    // let URL = await driver.getCurrentUrl();
    driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/button')).click();
    await sleep(2000);
    driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/button[2]/a')).click();
    let URL = await driver.getCurrentUrl();
    assert(URL !== "http://localhost:3000/Files" );
    console.log("User Blocked from reaching View all files page");
    // await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
  } catch (err) {
    //do a thing
    console.log("Failed to block non logged in user from reaching view all files page");
    // console.log(err);
  }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

