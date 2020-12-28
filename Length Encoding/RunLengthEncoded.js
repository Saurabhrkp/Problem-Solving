const prompt = require('prompt-sync')({ sigint: true });

let output = '';
let count = 0;

const input = prompt('Enter input: ');

for (let i = 0; i < input.length; i++) {
  count++;
  if (input[i] != input[i + 1]) {
    output += input[i] + count;
    count = 0;
  }
}

console.log(`The length encoded output for ${input} \n is ${output}`);
