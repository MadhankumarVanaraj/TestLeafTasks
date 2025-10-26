import {test} from '@playwright/test'
import { promises } from 'dns';
import path from 'path';

test(`File download practice`,async({page})=>{

await page.goto(`https://leafground.com/file.xhtml`);
const[downloads] = await Promise.all([page.waitForEvent('download'),page.click(`button[type='submit']`)])
await downloads.saveAs(path.join(__dirname,`../../Data`,downloads.suggestedFilename()));

})