//Assignment: 1 Create a Lead
import{test, expect} from '@playwright/test'

test(`Assignment 1: Create a Lead`,async({page})=>{

await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`#username`).fill(`Demosalesmanager`);
await page.locator(`#password`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();
await page.locator(`div a`).nth(1).click();
await page.locator(`//a[text()='Leads']`).click();
await page.locator(`//a[text()='Create Lead']`).click();
await page.locator(`#createLeadForm_companyName`).fill(`BHC`);
await page.locator(`#createLeadForm_firstName`).fill(`Madhan kumar`);
await page.locator(`#createLeadForm_lastName`).fill(`Vanaraj`);
await page.locator(`#createLeadForm_personalTitle`).fill(`Mr.`);
await page.locator(`#createLeadForm_generalProfTitle`).fill(`Playwright Locator Learning`);
await page.locator(`#createLeadForm_annualRevenue`).fill(`50000`);
await page.locator(`#createLeadForm_departmentName`).fill(`Healthcare`);
await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(`8015766771`);
const titleBeforeSubmit = await page.title();
console.log(`The page title before submit ${titleBeforeSubmit}`);
await page.locator(`.smallSubmit`).click();
await page.waitForTimeout(5000);
const titleAfterSubmit = await page.title();
console.log(`The page title after submit ${titleAfterSubmit}`);
})

// Assignment: 2 Edit a Lead
test(`Assignment 2: Edit Lead`,async({page})=>{
await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`#username`).fill(`Demosalesmanager`);
await page.locator(`#password`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();
await page.locator(`div a`).nth(1).click();
await page.locator(`//a[text()='Leads']`).click();
await page.locator(`//a[text()='Find Leads']`).click();
await page.locator(`[name='firstName']`).last().fill(`Madhan kumar`);
await page.locator(`//button[text()='Find Leads']`).click();
await page.locator(`(//a[@class='linktext'])[4]`).click();
await page.locator(`//a[text()='Edit']`).click();
await page.locator(`#updateLeadForm_companyName`).fill(`Quickly.app`);
await page.locator(`#updateLeadForm_annualRevenue`).fill(`10`);
await page.locator(`#updateLeadForm_departmentName`).fill(`SAP-CPQ`);
await page.locator(`.smallSubmit`).nth(0).click();
await page.waitForTimeout(5000);
const EditPageTitle = await page.title();
console.log(`The edit page title is ${EditPageTitle}`);
await page.waitForTimeout(5000);
}
)


// Assignment: 3 Create a new Account

test.only('Assignment: 3 Create a new Account',async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.getByLabel('username').fill('kumar.madhanmca298@agentforce.com');
await page.getByLabel('password').fill('Mahanyaash#5');
await page.pause();
await page.getByLabel('Remember me').check();
await page.getByRole('button',{name: 'Log In'}).click();
await page.waitForTimeout(5000);
await expect(page).toHaveTitle('Home | Salesforce');
await expect(page).toHaveURL(`https://orgfarm-7a89e6d006-dev-ed.develop.lightning.force.com/lightning/page/home`);
await page.locator(`.slds-r4`).click();
await page.getByRole('button',{name: 'View All'}).click();
await page.getByPlaceholder(`Search apps or items...`).fill(`Service`);
await page.locator(`(//p[@class='slds-truncate'])[1]`).click();
await page.locator(`span[class='slds-truncate']`).nth(3).click();
await page.getByRole('button',{name: 'New'}).click();
await page.locator(`[name='Name']`).fill('Boston');
await page.locator(`//button[@class='slds-button slds-button_brand']`).click();
const toastmessage = page.locator(`.toastContainer`);
expect(toastmessage).toHaveText(`Account "ACCE" was created.`, {timeout:5000});
await page.pause();
}
)