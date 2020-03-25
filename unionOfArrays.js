const prompt = require('prompt-sync')({ sigint: true });

const makeArray = (array, len) => {
  for (var i = 0; i < len; i++) {
    value = prompt(`Enter value for ${i + 1}: `);
    array[i] = Number(value);
  }
};
var arrayOne = [];
var arrayTwo = [];
const lenOne = prompt('Enter length of array One: ');
makeArray(arrayOne, lenOne);
const lenTwo = prompt('Enter length of array Two: ');
makeArray(arrayTwo, lenTwo);

const arrayUnique = array => {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }
  return a;
};
// Merges both arrays and gets unique items
var arrayFinal = arrayUnique(arrayOne.concat(arrayTwo));

console.log(`This is union of arrays: ${arrayFinal}`);
