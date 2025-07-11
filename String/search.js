
function searchProducts(products, searchQuery) {
  return products.filter((product)=> product.toUpperCase().includes(searchQuery.toUpperCase()))
}

// Example usage
let products = ["Apple", "banana", "Orange", "grape", "APPLE"];
let searchQuery = "apple";

let searchResult = searchProducts(products, searchQuery);
console.log(searchResult);  // ["Apple", "APPLE"]







  