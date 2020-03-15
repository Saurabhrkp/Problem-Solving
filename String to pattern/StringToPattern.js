const prompt = require('prompt-sync')({ sigint: true });

const string = prompt('Enter string: ');

var result = '';
var x = 1;
var substr = '';

for (var i = 0; i < string.length; i++) {
  var c = string.charAt(i);
  if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) < 58) {
    result += substr.repeat(x);
    x = c;
    substr = '';
  } else {
    substr += c;
  }
}
result += substr.repeat(x);

console.log(`Then pattern is: ${result}`);
