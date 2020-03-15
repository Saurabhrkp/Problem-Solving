const prompt = require('prompt-sync')({ sigint: true });

const string = prompt('Enter a string: ');

const shift = prompt('Enter a number to shift by: ');
var code;
var char;

for (let i = 0; i < string.length; i++) {
  if (
    Number(string[i].charCodeAt(0)) >= 65 &&
    Number(string[i].charCodeAt(0)) <= 122
  ) {
    if (Number(string[i].charCodeAt(0)) !== 32) {
      code = string[i].charCodeAt(0);
      code = Number(code) + Number(shift);
      if (code > 122) {
        code = code - 26;
      } else if (code > 90 && code < 97) {
        code = code - 26;
      }
      char = String.fromCharCode(code);
      process.stdout.write(`${char}`);
    } else {
      process.stdout.write(` `);
    }
  } else {
    process.stdout.write(`${string[i]}`);
  }
}
