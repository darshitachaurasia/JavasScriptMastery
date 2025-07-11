
// Define the cartItem array with each item represented as an object
const cartItems = [
  { name: "Laptop", price: 800, quantity: 2 },
  { name: "Phone", price: 500, quantity: 3 },
  { name: "Headphones", price: 100, quantity: 1 }
];

// Function to calculate total price of all items in the cart
function calculateTotalPrice(cartItems) {
   
   let cartprice = 0
   for(let i = 0 ; i < cartItems.length ; i++){
    const item = cartItems[i]
    cartprice += item.price*item.quantity;
   }
   
  return cartprice;

}

// Call the function and log the result
const total = calculateTotalPrice(cartItems);
console.log("Total Cart Price: $" + total);


