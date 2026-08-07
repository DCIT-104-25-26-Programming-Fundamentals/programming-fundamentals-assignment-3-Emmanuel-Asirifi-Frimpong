const readlineSync = require('readline-sync');

function generateFibonacciTerms(n) {
  if (n <= 0) {
    return null;
  }

  let sequence = [];
  if (n === 1) {
    sequence.push(0);
    return sequence;
  }

  let first = 0;
  let second = 1;
  sequence.push(first);
  sequence.push(second);

  for (let i = 2; i < n; i++) {
    let next = first + second;
    sequence.push(next);
    first = second;
    second = next;
  }

  return sequence;
}

function isFibonacciNumber(number) {
  if (number < 0) {
    return false;
  }

  let sequence = [0, 1];
  while (sequence[sequence.length - 1] < number) {
    let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(next);
  }

  return sequence.includes(number);
}

function main() {
  console.log('1. Print first N Fibonacci terms');
  console.log('2. Check if a number is Fibonacci');
  console.log('3. Quit');

  const choice = readlineSync.questionInt('Choose an option (1-3): ');

  if (choice === 1) {
    const n = readlineSync.questionInt('How many terms? ');
    const sequence = generateFibonacciTerms(n);

    if (sequence === null) {
      console.log('Error: N must be a positive integer.');
    } else {
      console.log('Fibonacci sequence: ' + sequence.join(' '));
    }
  } else if (choice === 2) {
    const number = readlineSync.questionInt('Enter a number to check: ');
    if (isFibonacciNumber(number)) {
      console.log(number + ' is a Fibonacci number.');
    } else {
      console.log(number + ' is NOT a Fibonacci number.');
    }
  } else if (choice === 3) {
    console.log('Goodbye!');
  } else {
    console.log('Invalid choice.');
  }
}

main();

