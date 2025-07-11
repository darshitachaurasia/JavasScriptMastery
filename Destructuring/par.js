
function displayInfo(person) {
  
  const {...name,...age,} = person;
  console.log(name,age)

}

displayInfo({ name: "Charlie", age: 35, city: "London" });
// Output: Name: Charlie, Age: 35

/**
 * 
function displayInfo(person) {
  console.log("Name: " + person.name + ", Age: " + person.age);
}

displayInfo({ name: "Charlie", age: 35, city: "London" });
// Output: Name: Charlie, Age: 35

 
 */