
function formatPriceFromApiResponse(apiResponse) {
const fee = Number(apiResponse.price);
return`$${fee}`
}

// Example usage:
const apiResponse = {
  productId: 12345,
  productName: "Laptop",
  price: "999.99", // Price returned as a string
  available: true
};

console.log(formatPriceFromApiResponse(apiResponse));  // "$999.99"



  