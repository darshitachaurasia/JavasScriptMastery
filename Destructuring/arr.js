
function getElements(arr) {
  
 const [first, , third] = arr;
  return { first, third };

}

const arr = [10, 20, 30, 40, 50];
const { first, third } = getElements(arr);

console.log(first); // Output: 10
console.log(third); // Output: 30

