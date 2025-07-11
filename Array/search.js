
function getSuggestions(products, query) {
  return products.filter(product => product.toLowerCase().startsWith(query.toLowerCase()))

}

// Example Usage:
const products = ["Shirt", "Shoes", "Hat", "Jeans"];
const query = "Sh";
const suggestions = getSuggestions(products, query);

console.log(suggestions); // Output: ["Shirt", "Shoes"]


  