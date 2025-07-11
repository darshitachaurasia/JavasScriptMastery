
function calculateDownloadSpeed(fileSize, time) {
  return (fileSize*8)/time;
}

// Function call example
console.log(calculateDownloadSpeed(50, 10)); // 40 Mbps


  