const puppeteer = require("puppeteer");
const scrape = async(from, to,amount) => {
    const url = `https://www.xe.com/currencyconverter/convert/?Amount=${amount}&From=${from}&To=${to}`

    const browser = await puppeteer.launch(); // kütüphaneyi başlatıyoruz
    const page = await browser.newPage();   //browser üzerinden newpage diyip
    await page.goto(url);

    const [ element ] =  await page.$x(`//*[@id="__next"]/div[2]/div[2]/section/div[2]/div/main/form/div[2]/div[1]/p[2]`);

    const text = await element.getProperty("textContent");
    const textValue = await text.jsonValue();

    console.log(textValue);
    browser.close();
};

scrape("TRY","USD",100);