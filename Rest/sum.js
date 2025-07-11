
function sumNumbers(...numbers) {
  return numbers.reduce((total,num)=> total + num ,0);
}

// Example
console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

  