var webdriver=require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By=webdriver.By;


driver.get('http://localhost:8083/#/dashboard');
try{
        var cc=driver.findElement(By.id("cc"))
        cc.clear()
        cc.sendKeys(20)
        driver.findElement(By.id("submiit")).click();
        console.log("premier Controle Continu changé en 20")
    }catch(err){
    console.log(err)
                }
            