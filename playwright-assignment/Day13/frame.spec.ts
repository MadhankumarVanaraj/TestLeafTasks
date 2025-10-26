import {test} from '@playwright/test'

test('frame-practice',async({page})=>
{
await page.goto(`https://leafground.com/frame.xhtml`);
const frameURL = page.frame({url:"https://leafground.com/framebutton.xhtml"})
frameURL?.locator(`#Click`).click();
await page.waitForTimeout(3000);

await page.goto(`https://leafground.com/frame.xhtml`);
const usingframeloc = page.frameLocator(`//iframe[@src='page.xhtml']`).frameLocator(`#frame2`);
await usingframeloc.locator(`#Click`).click();

await page.waitForTimeout(3000);
})