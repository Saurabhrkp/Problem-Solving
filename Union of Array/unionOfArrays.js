const prompt = require('prompt-sync')({ sigint: true });

const makeArray = (array, len) => {
  for (let i = 0; i < len; i++) {
    value = prompt(`Enter value for ${i + 1}: `);
    array[i] = Number(value);
  }
};
let arrayOne = [];
let arrayTwo = [];
const lenOne = prompt('Enter length of array One: ');
makeArray(arrayOne, lenOne);
const lenTwo = prompt('Enter length of array Two: ');
makeArray(arrayTwo, lenTwo);

const arrayUnique = (array) => {
  let a = array.concat();
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }
  return a;
};
// Merges both arrays and gets unique items
let arrayFinal = arrayUnique(arrayOne.concat(arrayTwo));

console.log(`This is union of arrays: ${arrayFinal}`);
