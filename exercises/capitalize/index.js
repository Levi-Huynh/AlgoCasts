// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {

//     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }

//Make Empty array 'words'
//Split the input string by spaces to get an array
//For each word in the array
    //uppercase the first letter of the word
    //join first letter for the rest of the string
    //push result into 'words' array 
//join words in a string and return it

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
      //slice(1) = gives me everything from index 1, to last element in word
      words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');

}

module.exports = capitalize;


//https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27