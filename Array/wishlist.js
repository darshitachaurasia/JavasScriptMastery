
function getCommonItems(wishlist1, wishlist2) {
  
return wishlist1.filter(item => wishlist2.includes(item));
}

// Example Usage:
const wishlist1 = ["Shirt", "Shoes", "Hat"];
const wishlist2 = ["Shoes", "Hat", "Watch"];

const commonItems = getCommonItems(wishlist1, wishlist2);

console.log(commonItems);
// Output: ["Shoes", "Hat"]


  