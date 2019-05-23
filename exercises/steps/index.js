// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
//MUST HAVE CORRECT NUMBER OF EMPTY SPACES TO RIGHT HAND SIDE
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//From 0 to n (iterate through rows)
//create an emptry string 'stair'
//from 0 to n(iterate through columns)
//If current column is equal to or less than the current row
//add a '#' to 'stair'
//Else
//add a space to 'stair'
//console.log 'stair'

//FOCUS ON WRITING THESE EXPLANATIONS THAT GRIDER DOES BEFORE EACH PROBLEM!

//recursion: FInd your base case so that you stop the recursion
//

// function printNumber(n) {
// if(n===0) {
//     return;
// }
//   console.log(n);
//   printNumber(n-1)
// }
// printNumber(10);

function steps(n, row = 0, stair = '') {
  if(n===row) {
    return;
  }

  if(n=== stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if(stair.length <=row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;
