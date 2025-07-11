
// Employee Directory System
// Employee Directory Array
let employeeDirectory = [];

// Function to add a new employee
function addEmployee(name, jobTitle, department) {
  let employee = {
    name : name,
    jobTitle : jobTitle,
    department : department
  }
  employeeDirectory.push(employee)
  console.log(`${name} has been added to the directory.`);
}

// Function to view all employees
function viewAllEmployees() {

if (employeeDirectory.length === 0) {
    console.log("No employees in the directory.");
  } else {
    console.log("Employee Directory:");
    employeeDirectory.forEach((employee, index) => {
      console.log(`${index + 1}. Name: ${employee.name}, Job Title: ${employee.jobTitle}, Department: ${employee.department}`);
    });
  }
}

// Function to search for an employee by name
function searchEmployee(name) {
  const foundEmployee = employeeDirectory.find(employee => employee.name.toLowerCase() === name.toLowerCase());

  if (foundEmployee) {
    console.log(`Employee Found: Name: ${foundEmployee.name}, Job Title: ${foundEmployee.jobTitle}, Department: ${foundEmployee.department}`);
  } else {
    console.log(`No employee found with the name "${name}".`);
  }

}

// Example usage

// Adding employees
addEmployee("John Doe", "Software Engineer", "IT");
addEmployee("Jane Smith", "Marketing Manager", "Marketing");
addEmployee("Sam Brown", "HR Specialist", "Human Resources");

// Viewing all employees
viewAllEmployees();

// Searching for an employee
searchEmployee("Jane Smith");
searchEmployee("Alice Green");  
// Non-existing employee








  