const prompt = require('prompt-sync')({ sigint: true });

const number = prompt('Enter constraint: ');
const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
var array = [];
var result = [];
const primeTill = (arr, number) => {
  for (let i = 1; i < number; i++) {
    if (isPrime(i)) arr.push(i);
  }
};

primeTill(array, number);

const calculate = num => {
  var temp = [];
  var sum = 0;
  primeTill(temp, num);
  for (let j = 0; j < temp.length; j++) {
    sum = sum + temp[j];
    if (sum == num) result.push(num);
  }
};

array.forEach(num => calculate(num));
console.log(`The prime number till ${number} are ${result}`);
