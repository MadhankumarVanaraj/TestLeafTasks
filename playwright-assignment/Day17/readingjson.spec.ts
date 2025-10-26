import {test, expect} from '@playwright/test'
import Credentials from '../../Data/login.json'

test.describe.serial(`Login tests using 2 different data set in serial mode`,async () => {
    
for(let data of Credentials)
{
test(`Log in to Salesforce by reading data from json ${data.TestCaseID}`,async({page})=>
{
    await page.goto(`https://orgfarm-7a89e6d006-dev-ed.develop.my.salesforce.com/`);

    await page.locator(`#username`).fill(data.username);
    await page.locator(`#password`).fill(data.password);
})}
})