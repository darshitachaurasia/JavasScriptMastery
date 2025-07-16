
function trackOrder(orderId) {
const timer = setInterval(() => {
     return new Promise((resolve)=> resolve )
}, 1000);

 
}

// Example Usage
trackOrder(123).then(console.log);

  /**
function trackOrder(orderId) {
  const statuses = ["Preparing", "Out for delivery", "Delivered"];
  return new Promise((resolve) => {
    let i = 0;

    const interval = setInterval(() => {
      console.log(statuses[i]);
      i++;

      if (i === statuses.length) {
        clearInterval(interval);
        resolve("Order Complete");
      }
    }, 1000);
  });
}

// Example Usage
trackOrder(123).then(console.log);

   */