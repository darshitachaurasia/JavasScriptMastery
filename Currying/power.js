
 function power(a) {
  
 
    return function(b){
        return Math.pow(a,b);
    }

}

console.log(power(2)(3)); // Output: 8

