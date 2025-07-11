
function checkStock(inventory, item) {
  if(inventory[item]>0){
    return "in stock";
  }else{
    return 'out of stock';
  }

}

// Function call example
const inventory = { apples: 10, bananas: 0 };
console.log(checkStock(inventory, "apples")); // "In stock"
console.log(checkStock(inventory, "bananas")); // "Out of stock"

  