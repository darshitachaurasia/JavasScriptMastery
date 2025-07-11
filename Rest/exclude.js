
function excludeKeys(obj, ...keysToExclude) {
const newObj = {...obj}
keysToExclude.forEach(key=> delete newObj[key])
return newObj
}

// Example
console.log(excludeKeys({ name: "Mithun sir", age: 30, city: "Bangalore" }, "age", "city"));
// Output: { name: "Mithun sir" }

  