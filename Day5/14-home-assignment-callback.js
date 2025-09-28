// Step 1: Declare a global variable
let browser = "Chrome";

// Step 2: Function that accepts a callback
function checkBrowserVersion(callback) {
    setTimeout(() => {
        // Step 2b: Invoke callback after 2 seconds, pass browser value
        callback(browser);
    }, 2000);
}

// Step 3: Callback function to log browser version
function logBrowserVersion(version) {
    console.log("Browser version using callback is: " + version);
}

// Step 4: Call checkBrowserVersion and pass callback
checkBrowserVersion(logBrowserVersion);
