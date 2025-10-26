import {test, expect, chromium} from '@playwright/test'

test(`1. UI Assersion`, async()=>  
{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`https://orgfarm-7a89e6d006-dev-ed.develop.my.salesforce.com/`);

    await page.locator(`#username`).fill(`kumar.madhanmca298@agentforce.com`);
    const usernametxtbox = page.locator(`#username`);
    await page.locator(`#password`).click();

    //toHaveValue - Input has a value- To check whether the text box has particular value.
    await expect(usernametxtbox).toHaveValue(`kumar.madhanmca298@agentforce.com`); 

    //toHaveText - Element matches text(Exact match validation)
    const Element= page.locator(`#forgot_password_link`);
    await expect(Element).toHaveText(`Forgot Your Password?`); 

    //toContainText - Element contains text (Partial match also we can verify)
    const Elementhastxt = page.locator(`#forgot_password_link`);
    await expect(Elementhastxt).toContainText(`Forgot Your Password`); 

await page.waitForTimeout(3000);
})

test(`2. Locator Assersion`,async({page})=>
{
    await page.goto(`https://orgfarm-7a89e6d006-dev-ed.develop.my.salesforce.com/`);

    // await expect(locator).toBeVisible() - Element is visible
    const btnvisible = page.locator(`#Login`);
    await expect(btnvisible).toBeVisible();
    await page.waitForTimeout(3000);

    //await expect(locator).toBeEnabled() - Element is enabled
    const usernametxtbox = page.locator(`#username`);
    await expect(usernametxtbox).toBeEnabled();

    // await expect(locator).toBeEditable() - Element is editable
    await expect(usernametxtbox).toBeEditable();

}
    
)


test.only(`3. Page assersion`,async({page})=>
{
await page.goto("https://login.salesforce.com/");
await page.getByLabel('username').fill('kumar.madhanmca298@agentforce.com');
await page.getByLabel('password').fill('Mahanyaash#5');
await page.getByRole('button',{name: 'Log In'}).click();
await page.waitForTimeout(5000);
await expect(page).toHaveTitle('Home | Salesforce');
await expect(page).toHaveURL(`https://orgfarm-7a89e6d006-dev-ed.develop.lightning.force.com/lightning/page/home`);
})