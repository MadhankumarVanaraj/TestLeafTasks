/* Assignment Details:
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type. */

function NumberType(a)
{
    if(a>0)
    {
        console.log("The declared number is positive");
        
    }else if(a<0)
    {
        console.log("The declared number is negative"); //Like this we can put multiple else if conditions
        
    }
    else{
        console.log("The declared number is zero");
        
    }

}
NumberType(10);


