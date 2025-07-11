
function combineObjects(obj1, obj2) {
  
  return {...obj1,...obj2}

}

console.log(combineObjects({ name: "Alice", age: 25 }, { age: 30, city: "New York" }));
// Output: { name: "Alice", age: 30, city: "New York" }

