//Calculate the total price with tax
function calculateTotalPrice(price, taxRate) {
  const totalPrice = price + (price*taxRate);
  return totalPrice;
}

// Example usage:
console.log(calculateTotalPrice(100, 0.05)); // Output: 105
console.log(calculateTotalPrice(50, 0.1));   // Output: 55