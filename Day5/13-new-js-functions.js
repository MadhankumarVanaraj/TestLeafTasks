//Name function
function userProfile(name)
{
console.log("Hello "+name);

}

userProfile("Madhan")

//Arrow function
const double =(number)=>
{
console.log(number*2)

}

double(8)

//Anonymous function
//Anonymous function = function without a name. 
//Can be written using function keyword or arrow syntax.

/* (()=>{

    setTimeout(() => {
        console.log("The message is delayed by 2 second");
    }, 2000);
})
();
 */

//Call back function

function getUserData(callback)
{
    setTimeout(() => {

        callback();
        
    }, 2000);
}

getUserData(() => {
    console.log("Call Back Function");
});