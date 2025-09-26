//3.count the number of vowels in a string input: function

const vowels = ()=>
{
    let input = "function"
    let splitinput = input.split("");
    let vowelsc=['a','e','i','o','u']
    let count=0;
    for(let i=splitinput.length-1; i>=0; i--)
    {
        let char = splitinput[i];   //Inside the loop, we pick the character at index i of the array.
                                    //char will be each letter of the word "function" in reverse order.

        if(vowelsc.includes(char)) //vowelsc.includes(char) checks if the current character is in the vowelsc array.
                                    //.includes() returns true if the array contains the element, otherwise false
        {
            count++;
        }
    }
    return count;
}
console.log("The vowlels count is ", vowels());