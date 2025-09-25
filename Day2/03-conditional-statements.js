/* Assignment Details: Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages. */

function launchBrowser(browser)
{
    if(browser == "Chrome")
    {
        console.log("Chrome browser is launched");
        
    }
    else
    {
        console.log("Other Browser is launched");
        
    }
}
launchBrowser("Edge")

function runTests(testType)
{
switch(testType)
{
    case"Smoke": console.log("The testing type is smoke teting");
    break;

    case"sanity": console.log("The testing type is sanity teting");
    break;

    case"regression": console.log("The testing type is regression teting");
    break;

    default: console.log("The testing type is other.");

}
}

runTests("regression");

