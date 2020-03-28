const prompt = require('prompt-sync')({ sigint: true });

const stringOne = prompt('Enter first string: ');
var tempOne = stringOne.toLowerCase().split(' ');

const stringTwo = prompt('Enter second string: ');
var tempTwo = stringTwo.toLowerCase().split(' ');

var count = 0;
var words = [];

for (let i = 0; i < tempOne.length; i++) {
  const element = tempOne[i];
  if (tempTwo.indexOf(element) >= 0) {
    words.push(element);
    ++count;
  }
}

console.log(
  'Unique words shared between strings are ' + count + ' and words are ' + words
);
