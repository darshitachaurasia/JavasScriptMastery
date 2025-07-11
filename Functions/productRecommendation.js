//Create a function recommendProducts that recommends 
// products to a user based on their browsing history 
// (an array of product categories they viewed).

function recommendProducts(browsingHistory) {
  const reccommedations = 
  {electronics : ["smartphone", 'laptop']
  ,"home-appliances" : ["microwave","vacuum cleaner"]};
  const products = [];
  for(const category of browsingHistory){
    if(reccommedations[category]){
        products.push(...reccommedations[category])
    }
  }
 
 return products;
}

// Function call example
console.log(recommendProducts(["electronics", "home-appliances"])); 
// ["smartphone", "laptop", "microwave", "vacuum cleaner"]
 
  