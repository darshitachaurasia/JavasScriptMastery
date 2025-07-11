
const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 499, inStock: false },
  { id: 3, name: "Headphones", price: 50, inStock: true },
  { id: 4, name: "Mouse", price: 20, inStock: true },
  { id: 5, name: "Keyboard", price: 120, inStock: true }
];

// Function to filter products based on inStock and price
function filterProducts(products) {

    
       
      return products.filter(item=> item.price<100 && item.inStock === true )
    
    

}

// Call the function and display the filtered products
const filteredProducts = filterProducts(products);
console.log(filteredProducts);

