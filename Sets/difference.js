
function differenceOfSets(setA, setB) {
  (setA).delete(...setB);
   return setA;
    
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(differenceOfSets(setA, setB)); // Output: Set(2) {1, 2}
