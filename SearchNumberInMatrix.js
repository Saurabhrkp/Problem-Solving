const prompt = require('prompt-sync')({ sigint: true });

const row = prompt('Enter no. of rows: ');
const column = prompt('Enter no. of column: ');

var matrix = [];

for (var i = 0; i < row; i++) {
  matrix[i] = [];
  for (var j = 0; j < column; j++) {
    value = prompt(`Enter value for (${i + 1},${j + 1}): `);
    matrix[i][j] = Number(value);
  }
}

console.log(matrix);

const search = prompt('Enter no. to search: ');

for (var i = 0; i < row; i++) {
  for (var j = 0; j < column; j++) {
    if (search == matrix[i][j]) {
      console.log(`The entered value is at (${i + 1},${j + 1})`);
    }
  }
}
