import {chromium, test} from '@playwright/test'
import { log } from 'node:console';

test(`prompt box validation`,async()=>{

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto(`https://leafground.com/alert.xhtml`);

page.on(`dialog`,async(dialog)=>
{
    const dialogType=dialog.type();

    console.log(`The dialogue box type is ${dialogType}`);
    if(dialogType=='prompt')
    {
        dialog.accept("Madhan Kumar");
    }else{
        dialog.dismiss();
    }
}
)

await page.click(`(//span[text()='Show'])[5]`);

await page.waitForTimeout(5000);

})