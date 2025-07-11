
// Task Management (To-Do List) System

// Task array to store the list of tasks
let tasks = [];

// Function to add a task
function addTask(taskName) {
    let task = {
        name : taskName,
        completed : false
    }
    if(taskName){tasks.push(task)}
    else{ console.log ('Give task')}
}
// Function to mark a task as completed
function completeTask(taskName) {
  const foundTask = tasks
  .find(task => task.name.toLowerCase() === taskName.toLowerCase());
 if(foundTask){
   foundTask.completed = true;
   console.log('task completed')
 }else{
    console.log('not found')
 }
}

// Function to remove a task
function removeTask(taskName) {
   const taskIndex = tasks.findIndex(task => task.name === taskName);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);  // Remove the task from the array
    console.log(`Task: "${taskName}" has been removed.`);
  } else {
    console.log(`Task: "${taskName}" not found.`);
  }
}
// Function to view all tasks (pending and completed)
function viewTasks() {

if (tasks.length === 0) {
    console.log("No tasks in the directory.");
  } else {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. Name: ${task.name}, Completed: ${task.completed}`);
    });
  }
}

// Example usage
addTask("Buy groceries");
addTask("Walk the dog");
addTask("Finish JavaScript project");

viewTasks();  // View all tasks

completeTask("Buy groceries");  // Mark a task as completed




  