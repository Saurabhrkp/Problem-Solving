const prompt = require('prompt-sync')({ sigint: true });

const len = prompt('Enter length of input: ');
const input = [];

for (let i = 0; i < len; i++) {
  value = prompt(`Enter value for ${i + 1}: `);
  input[i] = Number(value);
}

let recursion = (array, min) => {
  let permutation = (n, src, initial, output) => {
    if (n == 0) {
      if (initial.length > 0) output[output.length] = initial;
      return;
    }
    for (let j = 0; j < src.length; j++)
      permutation(n - 1, src.slice(j + 1), initial.concat([src[j]]), output);
    return;
  };
  let output = [];
  permutation(min, array, [], output);
  return output;
};

let result = [];

recursion(input, 3).forEach((element, index) => {
  result[index] = element.reduce((acc, currentValue) => acc * currentValue);
});

console.log(`The Largest Product is ${Math.max(...result)}`);
