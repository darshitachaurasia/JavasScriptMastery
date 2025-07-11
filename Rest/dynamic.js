
function buildProduct(name, ...features) {
  return {name,features}
}

// Example
console.log(buildProduct("Laptop", "16GB RAM", "1TB SSD", "Intel i7"));
// Output: { name: "Laptop", features: ["16GB RAM", "1TB SSD", "Intel i7"] }

  