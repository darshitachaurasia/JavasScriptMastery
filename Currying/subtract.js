
 function subtract(a) {

    return function(b){
        return a-b;
    }

}

console.log(subtract(10)(5)); // Output: 5
