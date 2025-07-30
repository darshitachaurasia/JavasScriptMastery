
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b); // Helper function to calculate GCD
}

function lcm(a, b) {
  
    return (a*b)/gcd(a,b)
  }

console.log(lcm(4, 5)); // Output: 20


