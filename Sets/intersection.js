
function intersectionOfSets(setA, setB) {
  return new Set([...setA].filter(item => setB.has(item)));
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(intersectionOfSets(setA, setB)); // Output: Set(1) {3}
 