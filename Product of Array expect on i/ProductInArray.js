const prompt = require('prompt-sync')({ sigint: true });
let array = [];
const len = prompt('Enter length of array: ');
for (let i = 0; i < len; i++) {
  value = prompt(`Enter value for ${i + 1}: `);
  array[i] = Number(value);
}
console.log(array);
const productArray = (arr, len) => {
  if (len == 1) {
    return 0;
  }
  let product = [];
  let temp = 1;
  for (i = 0; i < len; i++) {
    product[i] = temp;
    temp *= arr[i];
  }
  temp = 1;
  for (i = len - 1; i >= 0; i--) {
    product[i] *= temp;
    temp *= arr[i];
  }
  return product;
};
process.stdout.write(`The product array is : `);
console.log(productArray(array, len));
