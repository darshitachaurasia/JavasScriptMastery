
function calculateCartTotal(cart) {

 return cart.reduce((total,item) => 
    {
     return   total += item.price*item.quantity },0)
}

// Example Usage:
const cart = [
  { name: "Book", price: 300, quantity: 2 },
  { name: "Pen", price: 50, quantity: 3 },
  { name: "Notebook", price: 200, quantity: 1 }
];

const total = calculateCartTotal(cart);

console.log(total); // Output: 950

  