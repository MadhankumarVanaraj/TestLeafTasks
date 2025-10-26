type supportedBrowser = "Chrome" | "Firefox" | "safari" 
function invokeBrowser(browserName:supportedBrowser){
    if (browserName==="Chrome") {
        console.log("Launch Chrome Browser");        
    }
}
invokeBrowser("Chrome")