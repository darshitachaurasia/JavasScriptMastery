
function fetchWithTimeout(url) {
return new Promise((resolve,reject)=> {
    
    const timeout = setTimeout(() => {
    reject("Request timed out")
  }, 5000);


fetch(url)
    .then(res => {
        clearTimeout(timeout)
        if(res.ok){
            resolve("succesful")
        }else{
            reject("failed",res.status)
        }
    })
    .catch(error=>{
        clearTimeout(timeout);
        reject("Request failed",error)
    })
  
})
}

// Function call
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts")
  .then(result => console.log(result))  // Expected output: "Data fetched successfully"
  .catch(error => console.log(error));  // Expected output: "Request timed out" if exceeds 5 seconds
  