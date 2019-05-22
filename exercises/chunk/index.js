// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]




// function chunk(array, size) {
// const chunked = [];

// for (let element of array) {
//     const last = chunked[chunked.length-1];


// if(!last || last.length === size) {
//     chunked.push([element]);
// }else{
//     last.push(element);
// }
// }
// return chunked;
// }


function chunk (array, size) {

    const chunked1 = [];
let i = 0;

while (i < array.length) {
 chunked1.push(array.slice(index, index+ size));
 index +=size;

}

return chunked;
}

module.exports = chunk;


// Create empty array to hold chunks called 'chunked' (blue array)
// For each element in the green "unchunked" array
// Retrieve the last element in the blue chunked
// If last element does not exist (haven't pushed any elements yet) or if its length is equal to chunk size:
// Push a new chunk into "chunked"  (blue) with the current element
// Else add the current element into the chunk  

// const letters = ["a", "b", "c", "d"]
// letters.slice(0,3) - means start at index 0, and end at index 3 (but don't include index 3) = [a, b, c]

//solution 2

// The while loop loops through a block of code as long as a specified condition is true.

// while (condition) {
    // code block to be executed
//   }

// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }

// do {
//     text += "The number is " + i;
//     i++;
//   }
//   while (i < 10);

//CREATE EMPTY 'CHUNKED' ARRAY
//CREATE 'INDEX' START AT 0
//WHILE INDEX IS LESS THAN ARRAY.LENGTH
//PUSH A SLICE OF LENGTH 'SIZE' FROM 'ARRAY' INTO 'CHUNKED'
//ADD 'SIZE' TO 'INDEX'
//set index to let not const as it will be changing overtime
// function chunk (array, size) {

//     const chunked1 = [];
// let i = 0;

// while (i < array.length) {
//  chunked1.push(array.slice(i, i+ size));
 //below moves on to next index at index+size (move by chunks of 2, or 3, or 4 (depends on size to create new subarrays) incrementing
 //by the size you want to make your new subarray)
//  i +=size;

// }

// return chunked;
// }

// module.exports = chunk;



// function chunk (array, size) {

//     const chunked1 = [];
// let i = 0;

// while (i < array.length) {
//  chunked1.push(array.slice(index, index+ size));
//  index +=size;

// }

// return chunked;
// }