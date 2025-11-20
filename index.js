import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  args: ["--no-sandbox"],
});
const page = await browser.newPage();

await page.goto("https://id.jobstreet.com/id/PHP-Developer-jobs");
await page.setViewport({ width: 1080, height: 1024 });

const jobs = [];

const articles = await page.$$("article");
const jobUrl = await articles[0].$eval('a[data-automation="jobTitle"]', (el) =>
  el.getAttribute("href")
);
console.log(jobUrl);
// const jobId = await articles[0].evaluate((el) =>
//   el.getAttribute("data-job-id")
// );
// console.log("jobId: ", jobId);
// const jobPage = await browser.newPage();
// const jobLink = `https://id.jobstreet.com/job/${jobId}`;
// await jobPage.goto(jobLink);
// await jobPage.setViewport({ width: 1080, height: 1024 });
// await jobPage.waitForSelector('div[data-automation="jobDetailsPage"]', {
//   timeout: 5_000,
// });
// console.log(await jobPage.title());
// await jobPage.close();

// for (const article of articles) {
//   const jobId = await article.evaluate((el) => el.getAttribute("data-job-id"));
//   const jobPage = await browser.newPage();
//   const jobLink = `https://id.jobstreet.com/job/${jobId}`;
//   await jobPage.goto(jobLink);
//   await jobPage.setViewport({ width: 1080, height: 1024 });
//   await jobPage.waitForSelector('div[job-automation="jobDetailsPage"]');
//   console.log(await jobPage.title());
//   // try {
//   //   const jobTitle = await jobPage.$eval(
//   //     '[data-automation="job-detail-title"]',
//   //     (el) => el.textContent.trim()
//   //   );

//   //   jobs.push({
//   //     id: jobId,
//   //     title: jobTitle,
//   //   });
//   // } catch (err) {
//   //   console.log("Error scraping: ", jobLink, err);
//   // } finally {
//   await jobPage.close();
//   // }
// }

console.log("Found: ", jobs.length);
console.log("Jobs: ", jobs);

await browser.close();
