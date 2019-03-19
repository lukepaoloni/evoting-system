const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');



(async function createNew() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    driver.get('http://localhost:3000');
    await sleep(3000);
    driver.findElement(By.name('username')).sendKeys('Blanc', Key.RETURN);
    driver.findElement(By.name('password')).sendKeys('Berry', Key.RETURN);
    await sleep(1000);
    driver.findElement(By.id('submit')).click();
    await sleep(3000);
    driver.findElement(By.id('NewFile')).click();
    await sleep(3000);
    driver.findElement(By.name('name')).sendKeys('Pictures', Key.RETURN);
    driver.findElement(By.name('size')).sendKeys('420', Key.RETURN);
    driver.findElement(By.name('description')).sendKeys('Many Many Pics', Key.RETURN);
    driver.findElement(By.name('type')).sendKeys(Key.DOWN);
    await sleep(2000);
    driver.findElement(By.name('submitNew')).click();
    await sleep(3000);
    let response = await isAlertPresent(driver)
    if(response === "Uploaded File"){
        console.log('Assert true. File has been Created Correctly')
    } else {
        console.log('Assert false. File Failed To be created')
    }

} catch (err) {
    console.log("Failed To create new file");
    console.log(err);
  }
  
  finally {
    driver.quit();
  }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function isAlertPresent(driver) 
{ 
    try 
    { 
        var response = await driver.switchTo().alert().getText();			 
        return response; 
    }   // try 
    catch (Err) 
    { 
        return false; 
    }   // catch 
}   // isAlertPresent()