
// Function to check the hemisphere based on latitude
const checkHemisphere = (latitude) => {

      if(latitude >0){
         return ('Northern')
      }else if(latitude === 0){
        return ('equator')
      }
      else{
           return('SOuthern')
      }

};

// Example usage
const latitude = 40.730610; // Replace with the latitude of the city
console.log(checkHemisphere(latitude));

