const readlineSync = require('readline-sync');

let students = [];

function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
  }
  return sum / scores.length;
}

function addStudent() {
  const name = readlineSync.question('Student name: ');
  const id = readlineSync.questionInt('Student ID: ');
  const count = readlineSync.questionInt('How many scores? ');

  let scores = [];
  for (let i = 0; i < count; i++) {
    const score = readlineSync.questionInt('Enter score ' + (i + 1) + ': ');
    scores.push(score);
  }

  const student = { name: name, id: id, scores: scores };
  students.push(student);
  console.log('Student "' + name + '" added successfully.');
}

function displayStudents() {
  if (students.length === 0) {
    console.log('No students added yet.');
    return;
  }

  console.log('Name\tID\tScores\tAverage');
  console.log('----\t--\t------\t-------');
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student.scores).toFixed(2);
    console.log(student.name + '\t' + student.id + '\t' + student.scores.join(', ') + '\t' + average);
  }
}

function calculateAverageForStudent() {
  const id = readlineSync.questionInt('Enter student ID: ');

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      const average = calculateAverage(students[i].scores).toFixed(2);
      console.log(students[i].name + "'s average score: " + average);
      return;
    }
  }

  console.log('Student ID not found.');
}

function main() {
  while (true) {
    console.log('\n===============================');
    console.log('STUDENT RECORD SYSTEM MENU');
    console.log('===============================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');

    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    if (choice === 1) {
      addStudent();
    } else if (choice === 2) {
      displayStudents();
    } else if (choice === 3) {
      calculateAverageForStudent();
    } else if (choice === 4) {
      console.log('Goodbye!');
      break;
    } else {
      console.log('Invalid choice.');
    }
  }
}

main();

