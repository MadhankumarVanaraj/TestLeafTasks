import {test, expect} from '@playwright/test'

test('checkbox',async({page})=>{

await page.goto(`https://leafground.com/checkbox.xhtml`);
await page.locator(`(//div[contains(@class,'ui-selectbooleancheckbox')]//div)[2]`).click();
await page.locator(`(//div[contains(@class,'ui-chkbox-box ui-widget')])[2]`).click();
await expect(page.locator(`//span[text()='Checked']`)).toHaveText('Checked');
await page.locator(`//tbody/tr/td[3]/div/div[2]`).click();
await page.waitForTimeout(3000);
})