//class room activity
// Verify if a textbox is disabled Locate the textbox with label “Verify if text box is disabled”. 
// Assert that this textbox is disabled (not editable).
import{test, expect} from '@playwright/test'
test(`Assignment 1: Create a Lead`,async({page})=>{
await page.goto(`https://leafground.com/input.xhtml`);
const buttonstatus = page.locator(`input[placeholder='Disabled']`);
await expect(buttonstatus).toBeDisabled();
})

//Assersion practice
//Verify the placeholder text in “Type your name” textbox Locate the textbox with label “Type your name”. 
// Assert that the textbox has a placeholder value "Babu Manickam". and it editable / enabled. Type your name as assertion. 

test.only(`Assersion1: Create a Lead`,async({page})=>{
await page.goto(`https://leafground.com/input.xhtml`);
await page.locator(`input[placeholder='Babu Manickam']`).fill(`Madhan Kumar`);
await expect(page.locator(`input[placeholder='Babu Manickam']`)).toBeEditable();
await expect(page.locator(`input[placeholder='Babu Manickam']`)).toBeEnabled();


//Verify “Append Country to this City” textbox Locate the textbox that already has the value “Chennai”. 
// Assert that textbox if it is editable. Append text " India" to it. 
await expect(page.locator(`[value='Chennai']`)).toBeEditable();
await page.locator(`[value='Chennai']`).type(`India-`);
await page.waitForTimeout(5000);
})

