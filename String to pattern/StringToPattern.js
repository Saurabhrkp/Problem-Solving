const prompt = require('prompt-sync')({ sigint: true });

const string = prompt('Enter string: ');

let result = '';
let x = 1;
let substr = '';

for (let i = 0; i < string.length; i++) {
  let char = string.charAt(i);
  if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) < 58) {
    result += substr.repeat(x);
    x = char;
    substr = '';
  } else {
    substr += char;
  }
}
result += substr.repeat(x);

console.log(`Then pattern is: ${result}`);
