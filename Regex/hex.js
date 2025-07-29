
function findHexColors(text) {
  const pattern = /#(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6})(?=\b|[^a-fA-F0-9])/g;

  return text.match(pattern)|| []
}

// Example usage:
console.log(findHexColors("The colors are #FF5733 and #f73.")); // ["#FF5733", "#f73"]

  