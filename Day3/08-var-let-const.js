/* Assignment Details:
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
differently when printed.  */

const browserName = "Chrome";

function getBrowserName() 
{
        let browserName = "Edge";
        console.log("Inside the function let " + browserName);
}

function getBrowserNames() 
{
        var browserName = "Firefox";
        console.log("Inside the function using var " + browserName);
}

getBrowserName()
getBrowserNames()

console.log("The global variable browser is " + browserName);