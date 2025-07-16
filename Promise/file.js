
function simulateFileUpload(fileName, size) {
  return new Promise((resolve)=>{
    setInterval(() => {
       resolve(`${fileName} uploaded after ${size} seconds because of its size`)  
    }, size);
  })
}

// Example Usage
simulateFileUpload("photo.jpg", 3).then(console.log);

  /**
function simulateFileUpload(fileName, size) {
  return new Promise((resolve) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.ceil(100 / size);
      console.log(`Uploading ${fileName}: ${progress}%`);

      if (progress >= 100) {
        clearInterval(interval);
        resolve("File uploaded successfully!");
      }
    }, 1000);
  });
}

// Example Usage
simulateFileUpload("photo.jpg", 3).then(console.log);

   */