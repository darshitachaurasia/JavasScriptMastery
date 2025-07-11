
function calculateDistance(x1, y1, x2, y2) {
  dx = x2-x1;
  dy = y2-y1;
    distance = Math.sqrt(dx*dx + dy*dy);
    return distance.toFixed(2);
}

// Example usage:
console.log(calculateDistance(3, 4, 7, 1)); // Output: 5.00
console.log(calculateDistance(0, 0, 5, 12)); // Output: 13.00
