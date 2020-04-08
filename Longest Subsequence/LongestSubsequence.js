const prompt = require('prompt-sync')({ sigint: true });
var array = [];
const len = prompt('Enter length of array: ');
for (var i = 0; i < len; i++) {
  value = prompt(`Enter value for ${i + 1}: `);
  array[i] = Number(value);
}
console.log(`Given array is ${array}`);

const subsequence = (arr, n) => {
  var lis = [];
  var i,
    j,
    max = 0;

  for (i = 0; i < n; i++) lis[i] = 1;

  for (i = 1; i < n; i++)
    for (j = 0; j < i; j++)
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) lis[i] = lis[j] + 1;

  for (i = 0; i < n; i++) if (max < lis[i]) max = lis[i];

  return max;
};
var result = subsequence(array, array.length);

console.log(`Longest increasing subsequence has length: ${result}`);
