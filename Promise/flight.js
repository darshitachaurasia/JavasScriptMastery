
function bookFlight(ticketDetails) {
for (const key in ticketDetails) {
   console.log(ticketDetails[key])

   return new Promise((resolve)=>{
   setTimeout(()=>{
        resolve(`TIcket booked for ${ticketDetails[key]}`)
    },3000)
   })
}
 
}

// Example Usage
bookFlight({ passenger: "Pinkee", flight: "AI-202" }).then(console.log);
  