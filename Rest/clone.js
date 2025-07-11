
function cloneObject(obj, ...keys) {
 keys.reduce((total,value)=> )
}

// Example
console.log(cloneObject({ a: 1, b: 2, c: 3 }, "a", "c"));
// Output: { a: 1, c: 3 }

  /**
   * 
function cloneObject(obj, ...keys) {
  return keys.reduce((clone, key) => {
    if (key in obj) 
    clone[key] = obj[key];
    return clone;
  }, {});
}

// Example
console.log(cloneObject({ a: 1, b: 2, c: 3 }, "a", "c"));
// Output: { a: 1, c: 3 }

  
   */