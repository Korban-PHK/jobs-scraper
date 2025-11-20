import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto("https://id.jobstreet.com/id/PHP-Developer-jobs");

await page.setViewport({ width: 1080, height: 1024 });

const articleSelector = await page.locator("article").waitHandle();
const jobId = await articleSelector?.evaluate((el) =>
  el.getAttribute("data-job-id")
);

console.log(jobId);
