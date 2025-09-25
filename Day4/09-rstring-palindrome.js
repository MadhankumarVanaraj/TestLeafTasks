
function stringR()
{
    let input = "noon";
    let chars = input.split("");
    let reverse ='';

    for(let i=chars.length-1; i>=0; i--)
    {
        reverse+=chars[i];
    }
    console.log("The reversed string is "+reverse);
     
    if(input===reverse)
    {
        console.log("The given string is palindrome");
        
    }else{
        console.log("The given string is not a palindrome");
        
    }
    return reverse; // for reusability we are using this return. the entire function stringR() now holds the return value. 
                    //gives the result back to whoever called the function.
}
stringR()

