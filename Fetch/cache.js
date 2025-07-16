
const cache = {}; // Object to store cached data

async function fetchWithCache() {
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json()
    return data
  }catch(error){

  }
}

// Example usage
fetchWithCache().then(data => console.log(data));

  

/**
 * if (cache[url]) {
    console.log("Returning cached data");
    return cache[url]; // Return cached data
  }
cache[url] = data; 
 */