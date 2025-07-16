
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
 try{fetch(url)
 const response = await fetch(url); // Fetch data from the API
    const data = await response.json(); // Parse JSON response
    return data; // Return the array of objects

 }catch(error){
    console.log("Error fetching",error)
 }
}

// Example usage
fetchData().then(data => console.log(data));

  