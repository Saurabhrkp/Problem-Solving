const prompt = require('prompt-sync')({ sigint: true });

const input = [];

const len = prompt('Enter length for pattern: ');
let temp = 1;

for (let i = 0; i < len; i++) {
  temp % 2 !== 0 ? (input[i] = temp) : (input[i] = '@');
  temp++;
}

var pattern =
  len % 2 !== 0
    ? input.join('') + '@' + input.reverse().join('')
    : input.join('') + input.reverse().splice(1).join('');

console.log(`The pattern for ${len} is ${pattern}`);
