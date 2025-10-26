import { test } from "@playwright/test";
import path from "path";

test(`File Download`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);
    
    const filePromise = page.waitForEvent("download")
    await page.getByText("Download",{exact:true}).click() // This click action will download the file
    const fDown = await filePromise // resolving the promise ones after the download action is complete

    /* Option1 : Relative path */

//    await fDown.saveAs("Data/SepPW.png"); // to use cutomized filename 

//    await fDown.saveAs(`Data/${fDown.suggestedFilename()}`);// to use original filenname

    /* Option2 : Absolute path */
//Downloading the file to Data folder using absolute path of the current file.

// await fDown.saveAs(path.join(__dirname,`../../Data/Absolute.png`)) // __dirname--> current module, to use cutomized filename

// await fDown.saveAs(path.join(__dirname,`../../Data`,fDown.suggestedFilename()))

//Option3 :

await fDown.saveAs("D:\\DownloadedImage.png")

await page.waitForTimeout(5000);

})