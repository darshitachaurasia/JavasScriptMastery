
function splitArray(arr) {
  const  [first,second,...rest] = arr
  return {first,second,rest}

}

const arr = [1, 2, 3, 4, 5];
const { first, second, rest } = splitArray(arr);

console.log(first, second); // Output: 1 2
console.log(rest); // Output: [3, 4, 5]






