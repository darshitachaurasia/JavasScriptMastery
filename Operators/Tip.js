
function calculateTip(billAmount, tipPercentage) {

      tipAmount = billAmount*tipPercentage/100;

      return tipAmount;
}

// Example usage:
console.log(calculateTip(200, 15)); // Output: 30
console.log(calculateTip(50, 10));  // Output: 5


