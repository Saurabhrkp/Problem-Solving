const prompt = require('prompt-sync')({ sigint: true });

const string = prompt('Enter string: ');
var times = [];
var character = [];

var index = 0;
for (let i = 0; i < string.length; i += 2) {
  times[index] = Number(string[i]);
  index++;
}

var index = 0;
for (let i = 1; i < string.length; i += 2) {
  character[index] = string[i];
  index++;
}

const repeatCharacter = (item, index) => {
  return character[index].repeat(item);
};

var pattern = times.map(repeatCharacter);

console.log(`No. of times word should repeat: ${times}`);
console.log(`Character to repeat: ${character}`);
console.log(`This is the pattern: ${pattern.join('')}`);
