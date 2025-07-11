
function combineData(baseArray, ...arrays) {
return [...baseArray,...arrays.flat()]
}

// Example
console.log(combineData([1, 2], [3, 4], [5, 6]));
// Output: [1, 2, 3, 4, 5, 6]

  