
function convertSetToArray(mySet) {
  return [...mySet]

}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(convertSetToArray(mySet)); // Output: [1, 2, 3, 4, 5]
