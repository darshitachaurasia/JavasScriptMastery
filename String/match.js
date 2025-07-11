
function isProductMatch(query, description) {
  if (description.toLowerCase().includes(query.toLowerCase())) {
    console.log("Product matches the search query!");
  }
}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query, productDescription);











  