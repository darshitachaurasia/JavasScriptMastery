
function generateRandomNumber(min, max) {

      let char = Math.floor(Math.random() * (max-min+ 1)+ min)
       return char;
    }


// Example usage
console.log(generateRandomNumber(1, 10)); // Output: A random number between 1 and 10 (e.g., 7)
console.log(generateRandomNumber(5, 15)); // Output: A random number between 5 and 15 (e.g., 12)
 