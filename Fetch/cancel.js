
async function cancelRequest() {
  try{
   setInterval(()=> { ; await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json)
    .then(data=> console.log(data))},3000)
  }catch{
  const controller = new AbortController()
  return()=> {controller.abort}
}}

// Example usage:
cancelRequest().then(console.log).catch(console.error);

  /**
   * 
async function cancelRequest() {
  const controller = new AbortController(); // Create AbortController
  const signal = controller.signal;

  setTimeout(() => {
    controller.abort(); // Cancel the request after 3 seconds
  }, 3000);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      return 'Request canceled'; // Handle request cancellation
    }
    throw error;
  }
}

// Example usage:
cancelRequest().then(console.log).catch(console.error);

  
   */