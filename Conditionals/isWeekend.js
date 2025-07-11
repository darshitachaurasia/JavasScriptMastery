
// Function to check if today is a weekend
function isWeekend() {
    const date = new Date().getDay();
    console.log(date)
   
    if(date == 0 || date == 6){
        console.log("weekend")
    }else{
        console.log('weekday')
    }
}
// Call the function to check if today is a weekend
isWeekend();

  