//check if a string is a palindrome? input: madam

function reversestring()
{
    let input = "Testleaf";
    let reverse="";
    for(let i=input.length-1;i>=0;i--)
    {
        reverse+=input[i];
    }
    console.log("The reversed string is"+reverse);
    if(input==reverse)
    {
        console.log("The given string is palidrome");
        
    }else
    {
        console.log("The given string is not a palindrome");
        
    }
}
reversestring()