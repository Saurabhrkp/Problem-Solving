const prompt = require('prompt-sync')({ sigint: true });

const row = prompt('Enter no. of rows: ');
const column = prompt('Enter no. of column: ');

var matrix = [];

for (var i = 0; i < row; i++) {
  matrix[i] = [];
  console.log(`For array: ${i + 1}`);
  for (var j = 0; j < column; j++) {
    value = prompt(`Enter value in ${i + 1}: `);
    matrix[i][j] = Number(value);
  }
}

console.log('The 2D Array: ', matrix);

var result = [];

matrix.forEach((element) => {
  result.push(...element);
});

console.log(`Flat 2D array in asending order: 
${result.sort((a, b) => a - b)}
`);
