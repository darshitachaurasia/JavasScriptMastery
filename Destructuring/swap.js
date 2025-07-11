
function swapValues(a, b) {
     
    return [b,a]

}

let a = 5, b = 10;
[a, b] = swapValues(a, b);

console.log(a); // Output: 10
console.log(b); // Output: 5
