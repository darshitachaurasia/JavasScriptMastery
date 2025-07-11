

/**
 * 
 * if (arr.length === 0) {
        return [[]];  
// Base case: return empty subset when array is empty
    }

    const firstElement = arr[0];
    const remainingElements = arr.slice(1);

  // Get all subsets of the remaining array
    const subsetsWithoutFirst = generateSubsets(remainingElements);

  // Add the first element to each of the subsets
    const subsetsWithFirst = subsetsWithoutFirst.map(subset => [firstElement, ...subset]);

  // Return the combined subsets: with and without the first element
    return [...subsetsWithoutFirst, ...subsetsWithFirst]; 
 */

function chunkData(data, chunkSize) {
    const chuncks = []
    
    for(let i = 0 ; i < data.length ; i+= chunkSize){
      chuncks.push(data.slice(i,i+chunkSize));
    }
   
   return chuncks;
}

// Example Usage:
const data = ["User1", "User2", "User3", "User4", "User5"];
const chunkSize = 2;

const chunkedData = chunkData(data, chunkSize);

console.log(chunkedData);
// Output: [["User1", "User2"], ["User3", "User4"], ["User5"]]

  