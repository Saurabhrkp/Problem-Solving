const prompt = require('prompt-sync')({ sigint: true });

const input = [],
  odd = [],
  even = [];

const len = prompt('Enter length of input: ');

// iterating for len of input provided by user
for (let i = 0; i < len; i++) {
  value = prompt(`Enter value for ${i + 1}: `);
  input[i] = Number(value);
}

// iterating for every element in input
input.forEach((element) => {
  if (element % 2 !== 0) {
    odd.push(element);
  } else {
    even.push(element);
  }
});

// Sorting input using sort function
odd.sort((a, b) => b - a);
even.sort((a, b) => a - b);

// Logging Sorted output using spread operators: [...]
console.log(`The sorted output is ${[...odd, ...even]}`);
