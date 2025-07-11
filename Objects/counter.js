
// Function to create a counter object
function createCounter() {
   let counter = 0

   function increase(){
    ++counter
   }
    function decrease(){
    --counter
   }
    function reset(){
    createCounter()
   }
   function getCount(){
   return counter
   }

   return {
    increase,
    decrease,
    reset,
    getCount
   }
}

// Create a counter object
const counter = createCounter();

// Example usage
counter.increase();
console.log(counter.getCount()); // 1
counter.decrease();
console.log(counter.getCount()); // 0
counter.reset();
console.log(counter.getCount()); // 0




  