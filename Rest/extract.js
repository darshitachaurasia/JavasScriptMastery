
function extractItems(arr, ...indicesToExclude) {
 return arr.filter((_,index) =>!indicesToExclude.includes(index))
}

// Example
console.log(extractItems([10, 20, 30, 40, 50], 1, 3));
// Output: [10, 30, 50]

  