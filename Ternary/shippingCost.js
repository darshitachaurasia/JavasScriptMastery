
function shippingCost(cartTotal, distance) {
   return cartTotal >= 500 ? "Free Shipping"
: distance <= 10 ? 50
: 100 ;

}

// Test cases
console.log(shippingCost(600, 5));   // Output: "Free Shipping"
console.log(shippingCost(300, 8));   // Output: 50
console.log(shippingCost(300, 15));  // Output: 100
console.log(shippingCost(500, 20));  // Output: "Free Shipping"

  