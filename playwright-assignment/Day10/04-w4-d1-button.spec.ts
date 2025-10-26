import {test,expect} from '@playwright/test'

test('Leafground Button', async({page})=>
{
    await page.goto(`https://leafground.com/button.xhtml`);

    const BeforeLeaftitle = await page.title();
    console.log(`The title of the page before clicking the button is ${BeforeLeaftitle}`);
    
    await page.locator(`//span[text()='Click']`).click();
    await page.waitForTimeout(3000);
    const AfterLeaftitle = await page.title();
    console.log(`The title of the page after clicking the button is ${AfterLeaftitle}`);

    await page.goBack();

    expect(page.locator(`button[disabled='disabled']`)).toBeDisabled();

    await page.locator(`//span[text()='Image']`).click();
    await expect(page.locator(`.ui-overlaypanel-content`)).toBeVisible();//doubt -4. Click the Image button and click on any hidden button - how there is no hidden button(Assert the image)

    const roundedbutton = await page.locator(`.rounded-button`).count();
    console.log(`There are ${roundedbutton} buttons available.`);
    
}
)