
function formatLargeNumber(number) {
    if(number>= 1000000){
        return (number/1000000).toFixed(1) + "M";
    }
     if(number>= 1000){
        return (number/1000).toFixed(1) + "K";
    }else {
        return number.toString();
    }
}

// Example usage
console.log(formatLargeNumber(1500));  // Output: "1.5K"
console.log(formatLargeNumber(3500000)); // Output: "3.5M"
console.log(formatLargeNumber(950)); // Output: "950"
