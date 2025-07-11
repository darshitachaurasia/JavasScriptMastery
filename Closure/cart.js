
function createCart() {
    const items = []
 return{
    add : (item) => items.push(item),
    remove : (id) => items.splice(items.findIndex(item => item.id === id),1),
    view : () => items
 }
}

// Usage
const cart = createCart();
cart.add({ id: 1, name: 'Laptop', price: 1000 });
cart.add({ id: 2, name: 'Phone', price: 500 });
cart.remove(1);
console.log(cart.view()); // [ { id: 2, name: 'Phone', price: 500 } ]

  