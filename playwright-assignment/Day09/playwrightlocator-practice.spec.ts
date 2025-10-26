import {test, expect} from '@playwright/test'

test(`playwright locators practice`, async({page})=>
{
    await page.goto(`https://orgfarm-7a89e6d006-dev-ed.develop.my.salesforce.com/`);
    await page.getByRole('textbox',{name:'Username'}).fill(`kumar.madhanmca298@agentforce.com`);
    await page.getByRole('textbox',{name:'Password'}).fill(`Mahanyaash#5`);

    await page.getByLabel(`Remember me`).check(); 

    await page.getByRole('button',{name:'Log In'}).click();

    await page.getByText(`Leads`,{exact:true}).click();

    await page.locator(`//button[text()='New']`).click();

    await page.getByPlaceholder(`First Name`).fill(`Madhan Kumar`);

    await page.getByRole(`button`,{name:`Cancel`}).click();
    
    await page.getByTitle(`Contacts`).click();

    await page.getByAltText(`User`).click();

    await page.waitForTimeout(10000);
})