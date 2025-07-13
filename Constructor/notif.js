
function Notification(message, timestamp, priority) {
 this.message = message ;
 this.timestamp = timestamp;
 this.priority = priority ;

 this.isHighPriority = function(){
   if( priority === "high"){
    return true
   } return false
 }

}

// Example Usage:
const notification = new Notification("New comment received!", new Date(), "high");
console.log(notification.isHighPriority()); // Output: true

  