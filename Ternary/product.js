
function productStatus(stock, isDiscontinued) {
    return isDiscontinued? "discontinued" : stock? "in stock" : "Out of Stock"
}

// Test cases
console.log(productStatus(5, false));   // Output: "In Stock"
console.log(productStatus(0, false));   // Output: "Out of Stock"
console.log(productStatus(3, true));    // Output: "Discontinued"
console.log(productStatus(0, true));    // Output: "Discontinued"
console.log(productStatus(10, false));  // Output: "In Stock"


  