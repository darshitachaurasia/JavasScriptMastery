
function isCouponValid(coupon) {
 if (Date.now() > coupon.expiryDate){
    return false;
 }
 return true;
}

// Function call example
const coupon = { code: "SAVE50", expiryDate: "2024-12-31" };
console.log(isCouponValid(coupon)); // true or false
  