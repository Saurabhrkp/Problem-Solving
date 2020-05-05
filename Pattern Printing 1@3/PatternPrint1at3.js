const prompt = require('prompt-sync')({ sigint: true });

const input = [];

const len = prompt('Enter length for pattern: ');

input[0] = 1;
input[len * 2 - 2] = 1;

for (let index = 1; index < len * 2 - 2; index++) {
  if (index % 2 !== 0) {
    input[index] = '@';
  } else {
    input[index] = '3';
  }
}

console.log(`The pattern for ${len} is ${input.join('')}`);
