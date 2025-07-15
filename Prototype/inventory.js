class InventorySystem {
  constructor() {
    this.inventory = {}; 
// Object to store product names and their quantities
  }
  // Add a new product
  addProduct(name, quantity) {
    const{name,quantity}= product
   this.inventory.push(product)
   console.log(`${this.inventory}`)
  }

  // Update the quantity of an existing product
  updateQuantity(name, quantity) {
  const{name,quantity}= product
  this.inventory = {}
  this.inventory.push(product)
   console.log(`${this.inventory}`)
  }

  // Remove a product from the inventory
  removeProduct(name) {
    this.inventory.remove(name)
     console.log(`${this.inventory}`)
  }

  // View all products in the inventory
  viewInventory() {
   
    
     console.log(`${this.inventory}`)
  }
}

// Usage Example:
const inventory = new InventorySystem();

// Add products
inventory.addProduct("Laptop", 10); // Expected Output: "Product 'Laptop' added with quantity 10."
inventory.addProduct("Smartphone", 30); // Expected Output: "Product 'Smartphone' added with quantity 30."

// Update product quantity
inventory.updateQuantity("Laptop", 15); // Expected Output: "Quantity of 'Laptop' updated to 15."

// Remove product
inventory.removeProduct("Smartphone"); // Expected Output: "Product 'Smartphone' removed from inventory."

