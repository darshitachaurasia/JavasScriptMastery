
function getPersonDetails(person) {
  
  const {name,gender = "Unknown"} = person
  return {name,gender}

}

const person = { name: "Bob", age: 30 };
const { name, gender } = getPersonDetails(person);

console.log(name);   // Output: Bob
console.log(gender); // Output: Unknown

