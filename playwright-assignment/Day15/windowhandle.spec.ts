import {test, expect} from '@playwright/test'

test(`Window Handling`,async({page,context})=>
{
    await page.goto(`https://www.flipkart.com/`);

    await page.locator(`div input[title='Search for Products, Brands and More']`).fill(`phones`);
    const searchtxtbox = page.locator(`div input[title='Search for Products, Brands and More']`);
    await searchtxtbox.press(`Enter`);

    await page.waitForTimeout(3000);

    const newpage = context.waitForEvent(`page`)
    await page.locator(`//div[text()='Samsung Galaxy A35 5G (Awesome Iceblue, 128 GB)']`).click();

    const childPage = await newpage
    
    console.log(await page.title());
    console.log(await childPage.title());
})

test.only(`Handling Muliple pages`,async ({page,context}) => {
    
    await page.goto(`https://leafground.com/window.xhtml`);

    await Promise.all([context.waitForEvent('page'),page.getByText('Open Multiple',{exact:true}).click()])

    await page.waitForLoadState("domcontentloaded")

    const allPages = context.pages()

    console.log(allPages.length);

    console.log(await allPages[0].title());//allPages[0]-->means page --> parent page 
    console.log(await allPages[1].title());//allPages[1]--> firstchild page
    console.log(await allPages[2].title());//allPages[2]-->secongchild page    
})

