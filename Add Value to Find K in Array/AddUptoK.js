const prompt = require('prompt-sync')({ sigint: true });

var array = [];
var count = 0;

const len = prompt('Enter length of array: ');
for (var i = 0; i < len; i++) {
  value = prompt(`Enter value for ${i + 1}: `);
  array[i] = Number(value);
}

console.log(array);
const k = prompt('Enter value of k to search: ');

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    const sum = array[j] + array[i];
    if (sum == k) {
      console.log(`True: By adding value on index ${i},${j}`);
    } else {
      count = ++count;
    }
  }
  if (count == len) {
    console.log(`Not Found`);
  }
}
