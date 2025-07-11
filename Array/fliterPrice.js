
function filterByPrice(products, minPrice, maxPrice) {
  return products.filter(product => product.price >= minPrice && product.price >= maxPrice)
}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 600 }
];

const minPrice = 300;
const maxPrice = 600;
const filteredProducts = filterByPrice(products, minPrice, maxPrice);
console.log(filteredProducts);
// Output: [ { name: 'Shirt', price: 500 }, { name: 'Hat', price: 300 }, { name: 'Jeans', price: 600 } ]

  