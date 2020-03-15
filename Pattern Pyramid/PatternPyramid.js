const prompt = require('prompt-sync')({ sigint: true });

const len = prompt('Enter length for pattern: ');

var i,
  j,
  count = 1,
  num = 1;

for (i = 1; i <= len; i++) {
  for (var s = 0; s <= len - i; s++) {
    process.stdout.write(' ');
  }
  for (j = 1; j <= i; j++) {
    process.stdout.write(`${num}`);
    num++;
    if (i > 1 && count < i) {
      process.stdout.write('*');
      count++;
    }
  }
  process.stdout.write('\n');
  count = 1;
}
