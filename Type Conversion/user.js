
// List of users
const users = [
 { name: "John Doe", age: 30,email: "john.doe@example.com" },
{ name: "Jane Smith", age: 25,email: "jane.smith@example.com" },
 { name: "Alice Johnson", age: 35,email: "alice.johnson@example.com" },
{ name: "Bob Brown", age: 40, email: "bob.brown@example.com" }
];

// Function to display users
function displayUsers(users) {
  console.log("List of Users:");
  users.forEach((user, index) => {
    console.log(index + 1);
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
    console.log("------------------------");
  });
}

// Call the function to display users
displayUsers(users);





  