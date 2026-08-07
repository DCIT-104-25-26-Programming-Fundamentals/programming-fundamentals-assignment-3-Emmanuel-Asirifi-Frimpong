const readlineSync = require('readline-sync');

function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

function calculateAverage(numbers) {
  let sum = calculateSum(numbers);
  return sum / numbers.length;
}

function calculateMaximum(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function calculateMinimum(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function main() {
  const n = readlineSync.questionInt('How many numbers? ');

  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }

  let numbers = [];
  for (let i = 0; i < n; i++) {
    const value = readlineSync.questionInt('Enter number ' + (i + 1) + ': ');
    numbers.push(value);
  }

  console.log('\nResults:');
  console.log('Sum:     ' + calculateSum(numbers));
  console.log('Average: ' + calculateAverage(numbers).toFixed(1));
  console.log('Maximum: ' + calculateMaximum(numbers));
  console.log('Minimum: ' + calculateMinimum(numbers));
}

main();

