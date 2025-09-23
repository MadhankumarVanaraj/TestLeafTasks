/* Assignment Details:
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
differently when printed.  */

const browserName = "Chrome";

function getBrowserName() 
{
    if (browserName == "Chrome") 
    {
        let browserName = "Edge";
        console.log("Inside the browswer block is" + browserName);
    } 
        console.log("The browsername is" + browserName);
}

getBrowserName()