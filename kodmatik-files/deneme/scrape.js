const request = require('request');
const cheerio = require('cheerio');

const API = {
}
function exchangeMoney(from, to, amount){
    const url = `https://www.xe.com/currencyconverter/convert/?Amount=${amount}&From=${from}&To=${to}`

    request(`http://api.scraperapi.com/?api_key=${API.KEY}&url=${url}`, (err, res, body) => {
        const html = res.body;

        const $ = cheerio.load(html);
        const value = $('.result__BigRate-sc-1bsijpp-1.iGrAod').text();

        console.log(value);

    })
}

exchangeMoney("USD","TRY",100);