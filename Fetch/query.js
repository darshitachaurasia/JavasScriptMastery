
async function fetchPostsByUser(userId) {
try{
 const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`; // Add query parameter
  const res = await fetch(url)
  const posts = await res.json()
  return posts
}catch(error){
    console.log("error fetching url",error)
}
 
}

// Example usage
fetchPostsByUser(1).then(posts => console.log(posts));


  