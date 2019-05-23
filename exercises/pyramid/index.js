// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//From 0 to n (iterate through rows)
//create an emptry string 'level'
//from 0 to (2n-1) {columns}
//if current row = n && columns = n, add '#' to level
//if current row =(n-1), 

//when add space?

//iterative version

// function pyramid(n) {
//     const midpoint = Math.floor((2*n-1)/2);
//     for (let row=0; row<n; row++) {
//         let level = '';

//         for(let column=0; column < 2 * n -1; column++) {
//                 if(midpoint - row <= column && midpoint +row >= column) {
//                     level += '#';
//                 }else {
//                     level +=" ";
//                 }
//         }
//         console.log(level);
//     }
// }


function pyramid(n, row =0, level='') {
    if(row === n) {
        return;
    }

    if (level.length === 2 * n-1) {
        console.log(level);
        return pyramid(n, row+1);

    }

    //cacluate the midpoint
    //create range that is #
    //create range that is ' '
const midpoint = Math.floor((2*n - 1)/2);
let add;

//midpoint-row (to right of - box)  midpoint+row (to left of - box)
if (midpoint - row <= level.length && midpoint + row >= level.length ) {
    add = '#';
} else {
    add= ' ';
}
pyramid (n, row, level + add );
}


module.exports = pyramid;

//create playground of relationships

//const columns = [0,1,2,3,4];
//const row = 0; 