const puppeteer = require('puppeteer');
const md5 = require('md5');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://178.128.40.217:32158/');
  const str = await page.evaluate(() => document.querySelector('body > h3').innerHTML);
  console.log(str);
  console.log("md5 = " + md5(str));
  await page.type("body > center > form > input[type=text]:nth-child(1)", md5(str));
  await page.click("body > center > form > input[type=submit]:nth-child(3)");
})();