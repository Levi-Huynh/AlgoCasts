// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return (
  parseFloat(
      n
          .toString()
          .split('')
          .reverse()
          .join('')
  ) * Math.sign(n)
  
  )
  
  
  }
  
  module.exports = reverseInt;
  
  //parseFloat(num) converts num into a float from a String.
  
  // num = '0012345-'
  //parseFloat(num)
  // num = 12345
  
  //The parseInt() function parses a string argument 
  //and returns an integer of the specified radix (the base in mathematical numeral systems).
  
  //https://medium.freecodecamp.org/js-basics-how-to-reverse-a-number-9aefc20afa8d
  