const prompt = require('prompt-sync')({ sigint: true });

const row = prompt('Enter no. of rows: ');
const column = prompt('Enter no. of column: ');

var matrix = [];

for (var i = 0; i < row; i++) {
  matrix[i] = [];
  for (var j = 0; j < column; j++) {
    value = prompt('Enter value: ');
    matrix[i][j] = Number(value);
  }
}

console.log(matrix);
