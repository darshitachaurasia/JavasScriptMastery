
function streamMovie(movieName) {
  const movies = ["happy","Dil Bechara","Titanic","Inception"]
 return new Promise((resolve) => {
    let i = 0;
  
    movies.forEach((movie)=> setInterval(() => {
        if (movieName === movie){
            resolve("Movie found")
        }
    }, 3000)
)
 })


}

// Example Usage
streamMovie("Inception")
  .then(console.log)
  .catch(console.log);

  streamMovie("Dil")
  .then(console.log)
  .catch(console.log);
  