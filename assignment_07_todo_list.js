const readlineSync = require('readline-sync');

let tasks = [];

function addTask() {
  const task = readlineSync.question('Enter task: ');
  tasks.push(task);
  console.log('Task added: "' + task + '"');
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log('No tasks yet.');
    return;
  }

  console.log('Your Tasks:');
  for (let i = 0; i < tasks.length; i++) {
    console.log((i + 1) + '. ' + tasks[i]);
  }
}

function deleteTask() {
  if (tasks.length === 0) {
    console.log('No tasks to delete.');
    return;
  }

  viewTasks();
  const taskNumber = readlineSync.questionInt('Enter task number to delete: ');
  const index = taskNumber - 1;

  if (index < 0 || index >= tasks.length) {
    console.log('Invalid task number.');
    return;
  }

  const deletedTask = tasks[index];
  tasks.splice(index, 1);
  console.log('Task "' + deletedTask + '" has been removed.');
}

function main() {
  while (true) {
    console.log('\n============================');
    console.log('TO-DO LIST MENU');
    console.log('============================');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Delete task');
    console.log('4. Quit');

    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    if (choice === 1) {
      addTask();
    } else if (choice === 2) {
      viewTasks();
    } else if (choice === 3) {
      deleteTask();
    } else if (choice === 4) {
      console.log('Goodbye!');
      break;
    } else {
      console.log('Invalid choice.');
    }
  }
}

main();

