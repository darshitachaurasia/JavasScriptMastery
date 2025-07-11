
function determineDiscount() {
   let age = prompt("Enter your age");
   let isVIP = prompt("Write 'VIP' ");

   if(isVIP === 'VIP'){
    return '30% discount'
   }else if(age<18){
    return '10% dis'
   }else if(age>=60){
    return '20% dis'
   }else{
    return '5% dis'
   }
}

// Call the function to check the discount
determineDiscount();








  