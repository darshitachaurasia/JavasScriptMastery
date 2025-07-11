
function getPersonDetails(person) {
  
   const {name,age,} = person
   return {name,age}

}

const person = { name: "Alice", age: 25, city: "New York" };
const { name, age } = getPersonDetails(person);

console.log(name); // Output: Alice
console.log(age);  // Output: 25

