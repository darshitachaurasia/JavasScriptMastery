
 function calculateFinalPrice(price) {
    
    return function(discountrate){
         return function(taxrate){
        const Afterdiscount =  price - (price*discountrate)/100
        const tax = (Afterdiscount*taxrate)/100;
        return Afterdiscount + tax;
    }
    }

}

console.log(calculateFinalPrice(1000)(20)(15)); // Output: 920


