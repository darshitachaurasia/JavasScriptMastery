
function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    if(quantity> discountThreshold){
        const discountedPrice = price - (price*discountRate)/100;
        return discountedPrice*quantity;
    }else{
        return price*quantity;
    }

}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600
 