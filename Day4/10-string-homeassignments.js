
// Given a string s consisting of words and spaces, return the length of the last word in the string.

/* let s = "Hello world"
function wordlenth()
{
    let word = s.split(" ");
    let lastword =word[word.length-1];
    console.log("The length of the last word is "+lastword.length);
}
wordlenth() */

/* let s = " fly me to the moon "
function wordlenth1()
{
    let word = s.trim().split(" ");
    let lastword =word[word.length-1];
    console.log("The length of the last word is "+lastword.length);
}
wordlenth1()
 */
function isAnagram(str1, str2) {
    // Step 1: Remove spaces and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Step 2: Sort the characters
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    // Step 3: Compare sorted strings
    if (sortedStr1 === sortedStr2) {
        // Step 4: Return the result
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram("listen", " SIL ENT"));    // true
console.log(isAnagram("hello"," WORLD"));   // false




