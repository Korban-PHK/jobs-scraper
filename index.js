import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto("https://id.jobstreet.com/id/PHP-Developer-jobs");

await page.setViewport({ width: 1080, height: 1024 });

// await page.waitForSelector('article');
// const jobId = await articleSelector?.evaluate((el) =>
//   el.getAttribute("data-job-id")
// );
// const jobs = await articlesSelector?.evaluate((el) => el.classList);
// const articles = await articlesSelector?.$$eval();
// const jobCards = await page.$

const articles = await page.$$("article");
for (const article of articles) {
  const jobTitle = await article.$eval('a[data-automation="jobTitle"]', (el) =>
    el.textContent.trim()
  );
  const jobCompany = await article.$eval(
    'a[data-automation="jobCompany"]',
    (el) => el.textContent.trim()
  );
  const jobLocation = await article.$eval(
    'a[data-automation="jobLocation"]',
    (el) => el.textContent.trim()
  );
  const jobShortDescription = await article.$eval(
    'span[data-automation="jobShortDescription"]',
    (el) => el.textContent.trim()
  );
  const jobListingDate = await article.$eval(
    'span[data-automation="jobListingDate"]',
    (el) => el.textContent.trim()
  );
  const jobClassification = await article.$eval(
    'span[data-automation="jobClassification"]',
    (el) => el.textContent.trim()
  );
  const jobSubClassification = await article.$eval(
    'span[data-automation="jobSubClassification"]',
    (el) => el.textContent.trim()
  );
  console.log(title);
}

console.log("Found: ", articles.length);

await browser.close();
