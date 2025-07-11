
// Function to start the countdown
function countdown(seconds) {
  let i = seconds;
    const timer = setInterval(function(){
       console.log(i);
       i--;
      if(i < 0){
        clearInterval(timer)
        console.log('time up')
      }
 },1000);
}




// Start countdown from 10 seconds
countdown(10);


