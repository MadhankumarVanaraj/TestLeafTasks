import {test, expect} from '@playwright/test'

test("Open Chrome Browser", async({page})=> 
{
await page.goto("https://login.salesforce.com/?locale=in");
await page.locator("#username").fill("ravindran.ramdas@testleaf.com");
await page.locator("#password").fill("RaviSalesforce#1234");
await page.locator("#Login").click();
await page.waitForTimeout(5000)
// await page.pause();
}
)