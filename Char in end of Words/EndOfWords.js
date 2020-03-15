const prompt = require('prompt-sync')({ sigint: true });

const string = prompt('Enter string: ');

var array = Array.from(string);
console.log('Character at end of each words in sentences are: ');

for (let i = 0; i < array.length; i++) {
  if (array[i] == ' ') {
    process.stdout.write(`${array[i - 1]} `);
  }
}

process.stdout.write(array[array.length - 1]);
