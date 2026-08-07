const readlineSync = require('readline-sync');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function exponentiate(a, b) {
  return a ** b;
}

function main() {
  while (true) {
    console.log('\n============================');
    console.log('SIMPLE CALCULATOR');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');

    const choice = readlineSync.questionInt('Select an operation (1-7): ');

    if (choice === 7) {
      console.log('Goodbye!');
      break;
    }

    const firstNumber = readlineSync.questionFloat('Enter first number: ');
    const secondNumber = readlineSync.questionFloat('Enter second number: ');

    let result;
    let symbol;

    if (choice === 1) {
      result = add(firstNumber, secondNumber);
      symbol = '+';
    } else if (choice === 2) {
      result = subtract(firstNumber, secondNumber);
      symbol = '-';
    } else if (choice === 3) {
      result = multiply(firstNumber, secondNumber);
      symbol = '*';
    } else if (choice === 4) {
      if (secondNumber === 0) {
        console.log('Error: Cannot divide by zero.');
        continue;
      }
      result = divide(firstNumber, secondNumber);
      symbol = '/';
    } else if (choice === 5) {
      result = modulus(firstNumber, secondNumber);
      symbol = '%';
    } else if (choice === 6) {
      result = exponentiate(firstNumber, secondNumber);
      symbol = '**';
    } else {
      console.log('Invalid choice.');
      continue;
    }

    console.log('Result: ' + firstNumber + ' ' + symbol + ' ' + secondNumber + ' = ' + result.toFixed(2));
  }
}

main();

