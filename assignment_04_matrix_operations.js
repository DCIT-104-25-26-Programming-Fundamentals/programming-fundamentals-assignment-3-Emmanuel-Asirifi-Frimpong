const readlineSync = require('readline-sync');

function readMatrix() {
  const rows = readlineSync.questionInt('Enter number of rows: ');
  const cols = readlineSync.questionInt('Enter number of columns: ');

  let matrix = [];
  for (let i = 0; i < rows; i++) {
    const rowInput = readlineSync.question('Enter row ' + (i + 1) + ': ');
    const row = rowInput.split(' ').map(Number);
    matrix.push(row);
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowText = '';
    for (let j = 0; j < matrix[i].length; j++) {
      rowText = rowText + matrix[i][j] + ' ';
    }
    console.log(rowText);
  }
}

function transposeMatrix(matrix) {
  let result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let newRow = [];
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

function addMatrices(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < matrixA.length; i++) {
    let newRow = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      newRow.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

function multiplyMatrices(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < matrixA.length; i++) {
    let newRow = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let total = 0;
      for (let k = 0; k < matrixA[i].length; k++) {
        total = total + matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(total);
    }
    result.push(newRow);
  }
  return result;
}

function main() {
  console.log('1. Transpose a matrix');
  console.log('2. Add two matrices');
  console.log('3. Multiply two matrices');
  console.log('4. Quit');

  const choice = readlineSync.questionInt('Choose an option (1-4): ');

  if (choice === 1) {
    const matrix = readMatrix();
    console.log('\nOriginal Matrix:');
    printMatrix(matrix);
    console.log('\nTransposed Matrix:');
    printMatrix(transposeMatrix(matrix));
  } else if (choice === 2) {
    console.log('Enter Matrix A');
    const matrixA = readMatrix();
    console.log('Enter Matrix B');
    const matrixB = readMatrix();
    console.log('\nResult:');
    printMatrix(addMatrices(matrixA, matrixB));
  } else if (choice === 3) {
    console.log('Enter Matrix A');
    const matrixA = readMatrix();
    console.log('Enter Matrix B');
    const matrixB = readMatrix();
    console.log('\nResult:');
    printMatrix(multiplyMatrices(matrixA, matrixB));
  } else if (choice === 4) {
    console.log('Goodbye!');
  } else {
    console.log('Invalid choice.');
  }
}

main();

