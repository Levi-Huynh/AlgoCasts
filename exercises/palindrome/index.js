// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//notice you want booleans

function palindrome(str) {

    const reversed = str
        .split("")
        .reverse()
        .join("");
    
        return str === reversed;
    
    }
    
    module.exports = palindrome;
    
    
    //solution 2 (for lower case or unwanted characters)
      // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
         // or var re = /[^A-Za-z0-9]/g;
        //  var re = /[^A-Za-z0-9]/g;
    
        //  var lowRegStr = str.toLowerCase().replace(re,"");
         
        //  var reverseStr= lowRegStr.split("").reverse().join("");
    
    
       //EX of advanced array helper array.every() 
        // function isBelowThreshold(currentValue) {
        //     return currentValue < 40;
        //   }
          
        //   var array1 = [1, 30, 39, 29, 10, 13];
          
        //   console.log(array1.every(isBelowThreshold));
          // expected output: true
          
    //solutions 3 comparing mirroed characters see diagram
    // function palindrome(str) {
    //     return str.split('').every((char, i) => {
    //       return char === str[str.length - i - 1];
    //     });
    //   }
    