//Assignment Details:
// Your task is to print the title and url of a web page using Playwright

import {test,expect} from '@playwright/test'
test(`Salesforce Login`, async({page})=>{

    await page.goto("https://orgfarm-7a89e6d006-dev-ed.develop.my.salesforce.com/");
    await page.locator(`#username`).fill(`kumar.madhanmca298@agentforce.com`);
    await page.locator(`#password`).fill(`Mahanyaash#5`);
    await page.locator(`#Login`).click();
    await page.waitForTimeout(10000);
    const Title = await page.title();
    console.log("The title of the page is "+Title);
    const Url = page.url();
    console.log("The URL of the webpage is "+Url);
}
)