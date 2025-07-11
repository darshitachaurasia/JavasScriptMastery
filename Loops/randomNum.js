
// Function to generate random numbers
function generateRandomNumbers(count, min, max) {
  const randomNumbers = [] ; 
  for(let i = 0 ; i<count ; i++){
   const randomNumber = Math.floor(Math.random() * (max-min+ 1)+ min)

    //list 
   randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

// Example usage: Generate 5 random numbers between 1 and 10
const randomList = generateRandomNumbers(5, 1, 10);
console.log(randomList);

