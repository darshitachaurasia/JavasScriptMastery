
// Array of numbers to sum
const numbers = [5, 10, 15, 20, 25];

// Function to calculate the sum of the numbers
function calculateSum() {
    let sum = 0;
    for(let i = 0 ; i< numbers.length ; i++){
         
          sum = sum + numbers[i]
    }
    return sum;
}

// Calling the function to calculate the sum
calculateSum();
console.log(calculateSum()  )
