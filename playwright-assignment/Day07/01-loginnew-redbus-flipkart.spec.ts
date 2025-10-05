import {chromium,webkit, test,expect} from '@playwright/test'

test("Login Redbus and Flipkart",async()=>
{
    const browser = await chromium.launch({channel: 'msedge', headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.redbus.in/");
    const title = await page.title();
    console.log("The redbus page title is "+title);
    const url = page.url();
    console.log("The redbus URL is "+url);

    const webkitbrowser = await webkit.launch({headless:false})
    const webkitcontext = await webkitbrowser.newContext({ignoreHTTPSErrors: true});
    const webkitpg = await webkitcontext.newPage();
    await webkitpg.goto("https://www.flipkart.com/");
    const flipkarttitle = await webkitpg.title();
    console.log("The flipkart page title is"+flipkarttitle);
    const flipkartURL = webkitpg.url();
    console.log("The flipkart URL is "+flipkartURL);
}
)

test.only("Launch webkit browser", async()=>
{
    const browser = await webkit.launch({headless:false});
    const context = await browser.newContext({ignoreHTTPSErrors:true});
    const page = await context.newPage();
    await page.goto("https://www.flipkart.com/");
    const title = await page.title();
    console.log("The page title is "+title);
    const URL = page.url();
    console.log("The page URL is "+URL);
}
)