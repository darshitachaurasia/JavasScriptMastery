
function mostSearched(searches) {
const count = {};
searches.forEach((search)=>{
    count[search] = (count[search]|| 0) + 1}



)
let mostSearched = '';
let maxCount = 0;

for (const search in count) {
    if (count[search]> maxCount) {
        mostSearched = search;
        maxCount = count[search]
     
        
    }
}
return mostSearched;
}

// Example Usage:
const searches = ["Phone", "Laptop", "Phone", "Phone", "Tablet", "Laptop"];

const result = mostSearched(searches);

console.log(result); // Output: "Phone"


  