
const filterOdds = (arr) => {

  return  arr.filter((n)=> n%2 !== 0)
  
}
console.log(filterOdds([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
