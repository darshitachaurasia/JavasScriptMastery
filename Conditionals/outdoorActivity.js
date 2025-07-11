
// Function to give outdoor activity suggestion based on the weather (temperature)
function checkOutdoorActivity(temperature) {
     if(temperature<=0){
    console.log('stay indoors')
   }else if(temperature>0 && temperature<10){
    console.log('dress warmly and go')
   }else if(temperature>10 && temperature<20) {
    console.log('run or walk')
   }else if(temperature>20 && temperature<30){
    console.log('jogging,hiking,cycling')
   }else{
     console.log('stay indoors ,stay hydrated')
   }
}

// Example usage
let currentTemperature = 15; // Set the current temperature in Celsius
checkOutdoorActivity(currentTemperature);

  