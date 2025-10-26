import {test,expect} from '@playwright/test'
// test.use({ storageState: 'Data/login_SF.json' });

test('Create Lead', async({page})=>{

    /* await page.goto("https://orgfarm-7a89e6d006-dev-ed.develop.my.salesforce.com/");
    await page.locator(`#username`).fill(`kumar.madhanmca298@agentforce.com`);
    await page.locator(`#password`).fill(`Mahanyaash#5`);
    await page.locator(`#Login`).click(); */

    await page.goto('https://orgfarm-7a89e6d006-dev-ed.develop.lightning.force.com/lightning/page/home');
    await page.locator(`.slds-r4`).click();
    await page.getByRole('button',{name: 'View All Applications'}).click();
    await page.getByPlaceholder(`Search apps or items...`).fill(`Mar`);
    await page.waitForTimeout(5000);
    await page.locator(`//mark[text()='Mar']`).click();
    await page.locator(`//span[text()='Leads']`).click();
    await page.locator(`//button[text()='New']`).click();
    await page.locator(`div button[aria-label='Salutation']`).click();
    await page.locator(`//span[text()='Mr.']`).click();
    await page.locator(`div input[placeholder='First Name']`).fill(`Madhan Kumar`);
    await page.locator(`div input[placeholder='Last Name']`).fill(`Vanaraj`);
    await page.locator(`div input[name='Company']`).fill(`BHC`);
    await page.locator(`div button[name='SaveEdit']`).click();
    await page.locator(`lightning-button-menu button[class*='slds-button_last']`).first().click();
    await page.locator(`//span[text()='Convert']`).click();
    await page.locator(`//button[text()='Go to Leads']`).click();
    await page.waitForTimeout(3000);

})