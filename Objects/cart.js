
// Function to create a shopping cart object
function createShoppingCart() {
    // Shopping Cart object
    const shoppingCart = {
        // An array of objects representing items in the cart
        items: [
            { name: "T-shirt", price: 25, quantity: 2 }, // Item 1
            { name: "Jeans", price: 40, quantity: 1 }    // Item 2
        ],

        // Method to add a new item to the shopping cart
        addItem: function(item) {
            this.items.push(item);  // Adds the item to the 'items' array
        },

        // Method to calculate the total price of all items in the cart
        calculateTotal: function() {
            // Reduce the items array to sum up the total cost (price * quantity for each item)
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    };

    return shoppingCart;
}

// Function to add a new item
function addNewItemToCart(cart, name, price, quantity) {
    const newItem = { name, price, quantity };
    cart.addItem(newItem);  // Add the new item to the cart
}

// Create a shopping cart instance
const myCart = createShoppingCart();

// Display initial total price of the cart
console.log(`Initial Total: $${myCart.calculateTotal()}`);

// Add a new item to the cart
addNewItemToCart(myCart, "Sneakers", 60, 1);

// Display updated total price of the cart
console.log(`Updated Total: $${myCart.calculateTotal()}`);
