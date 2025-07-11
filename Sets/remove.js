
function removeElement(mySet, element) {
  
   mySet.delete(element);
   return mySet;

}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(removeElement(mySet, 3)); // Output: Set(4) {1, 2, 4, 5}

