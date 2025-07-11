
function splitObject(obj, keys) {
  
  // Your code here

}

const original = { name: "Alice", age: 25, city: "New York", country: "USA" };
console.log(splitObject(original, ["name", "age"]));
// Output: [{ name: "Alice", age: 25 }, { city: "New York", country: "USA" }]

/** 
function splitObject(obj, keys) {
  const obj1 = keys.reduce(function (acc, key) {
    return { ...acc, [key]: obj[key] };
  }, {});

  const obj2 = { ...obj };
  keys.forEach(function (key) {
    delete obj2[key];
  });

  return [obj1, obj2];
}

const original = { name: "Alice", age: 25, city: "New York", country: "USA" };
console.log(splitObject(original, ["name", "age"]));
// Output: [{ name: "Alice", age: 25 }, { city: "New York", country: "USA" }]

 */
