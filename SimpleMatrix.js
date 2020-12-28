const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the value of row of matrix? ', (data) => {
  const row = Number(data);
  rl.question('Enter the value of column of matrix? ', (data) => {
    const column = Number(data);
    const matrix = createMatrix(row, column);
    console.log(matrix);
  });
});

function createMatrix(row, column) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < column; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}
