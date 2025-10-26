import {test} from '@playwright/test'
test('prompt alert', async({page})=>
{
await page.goto(`https://leafground.com/alert.xhtml`);
page.on('dialog',async(prompt)=>{
    // await alert.accept();
        const promptMessage = prompt.message()
        console.log(`The message inside the prompt says ${promptMessage}`); 

        const promptType = prompt.type()
        console.log(`The prompt type is ${promptType}`); 

        await page.waitForTimeout(2000);

        if(promptType==='prompt'){
            await prompt.accept("Madhan Kumar")
        }else
            await prompt.dismiss()
    })

await page.locator(`(//span[text()='Show'])[5]`).click();
await page.waitForTimeout(3000);

})