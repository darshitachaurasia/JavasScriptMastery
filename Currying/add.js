
 const add = function(a) {
  return function(b) {
      
   return a+b;

  };
};

console.log(add(5)(3)); // Output: 8
