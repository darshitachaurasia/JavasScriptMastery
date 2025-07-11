
// Function to give clothing advice based on the temperature
function getClothingAdvice(temperature) {
   if(temperature<=0){
    console.log('heavy winter clothing')
   }else if(temperature>0 && temperature<10){
    console.log('warm jacket')
   }else if(temperature>10 && temperature<20) {
    console.log('light jacket')
   }else if(temperature>20 && temperature<30){
    console.log('t shirts ')
   }else{
     console.log('light clothes')
   }
}

// Example usage
let currentTemperature = 18; // Set the current temperature in Celsius
getClothingAdvice(currentTemperature);


  