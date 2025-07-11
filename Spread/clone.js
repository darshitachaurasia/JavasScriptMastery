
function cloneObject(obj) {
  
    return {...obj}

}

const original = { name: "Alice", age: 25 };
const cloned = cloneObject(original);
console.log(cloned);
// Output: { name: "Alice", age: 25 }

/** 
function cloneObject(obj) {
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
}

const original = { name: "Alice", age: 25 };
const cloned = cloneObject(original);
console.log(cloned);
// Output: { name: "Alice", age: 25 }
 */
