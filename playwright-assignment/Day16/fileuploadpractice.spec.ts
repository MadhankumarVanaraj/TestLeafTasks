import {test,expect} from'@playwright/test'
import path from 'path';

test(`File Upload Practice`, async({page})=>
{
 await page.goto(`https://leafground.com/file.xhtml`);
 const uploadfile = page.locator(`input[type='file']`).nth(0);
 await uploadfile.setInputFiles(path.join(__dirname,`../../Data/TestLeaf Logo.png`));
 await page.waitForTimeout(3000);
})