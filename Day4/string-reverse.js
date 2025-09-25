/* 
//Reverse the string using string methods.

function reversestr(str)
{
    return str.split("").reverse().join("");

}
console.log(reversestr("I LOVE INDIA")); */

// Hexaware Interview - Reverse the string I LOVE INDIA -> I AIDNI EVOL

function stringReverse(str) {
    // Step 1: Split by space into words
    let words = str.split(" ");
    
   let reversedWords = words.map(word => { return word.split("").reverse().join("");});
   
   return reversedWords.join(" ");
    
}

console.log(stringReverse("I LOVE INDIA")); // Output: I EVOL AIDNI
