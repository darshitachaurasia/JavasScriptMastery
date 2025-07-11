
function calculateDiscountedPrice(originalPrice, discountPercentage) {

        return originalPrice - (discountPercentage*originalPrice)/100
}

// Example usage:
console.log(calculateDiscountedPrice(100, 20)); // Output: 80
console.log(calculateDiscountedPrice(250, 10)); // Output: 225

