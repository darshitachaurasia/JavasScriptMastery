
function containsElement(mySet, element) {
  return mySet.has(element);
}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(containsElement(mySet, 3)); // Output: true

