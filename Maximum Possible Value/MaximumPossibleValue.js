const prompt = require('prompt-sync')({ sigint: true });
let array = [];
let sumOne = 0,
  sumTwo = 0;

const len = prompt('Enter length of array: ');
for (let i = 0; i < len; i++) {
  value = prompt(`Enter value for ${i + 1}: `);
  array[i] = Number(value);
}

console.log(array);

for (let i = 0; i < array.length; i += 2) {
  sumOne = sumOne + array[i];
}
for (let i = 1; i < array.length; i += 2) {
  sumTwo = sumTwo + array[i];
}

if (sumTwo > sumOne) {
  console.log(
    `The maximum value can be stole is ${sumTwo} by starting an index 1`
  );
} else {
  console.log(
    `The maximum value can be stole is ${sumOne} by starting an index 0`
  );
}
