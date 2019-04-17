// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charMap = {};
    let max = 0;
    //maxChar is char responsible for that max usage
    let maxChar = '';
    
    for (let char of str) {
    
        if (charMap[char]) {
            charMap[char]++;
    
        } else {charMap[char] =1;}
    }
    
    for (let char in charMap) {
       if(charMap[char] > max ){
        max = charMap[char];
        maxChar = char;
    
       }
    
    }
    return maxChar;
    
    }
    
    module.exports = maxChar;
    
    //Similar common string questions:
    //what is the most common character in the string?
    //does string have repeated characters in it?
    //reverse the order of words/numbers in string
    //is the string a palindrome?
    //Does stirng A have same characters as stirng B frequency & values (anagram?)
    //Does string have repeated characters?
    
    //https://www.draw.io/ diagram 2
    
    //STRATEGY:
    //Make string object
    //with each char as the key & 
    //each value as the the number times the key 
    //appears in the object
    
    //(see diagram3? )
    
    //https://alligator.io/js/for-of-for-in-loops/
    // Use for…of 
    // to iterate over the 
    // values in an iterable, like an array for example:
    
    // Use for…in to iterate over the properties of an object (the object keys):