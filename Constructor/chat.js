
function ChatMessage(text, sender, timestamp) {
this.text = text;
  this.sender = sender;
  this.timestamp = timestamp;

  this.formatMessage= function(){
    const formattedTime = this.timestamp.toLocaleTimeString([],{hour:'2-digit'},{minute: '2-digit' })
   return (`${this.sender} [${formattedTime}]: ${this.text}`)
  }
 
}

// Example Usage:
const message = new ChatMessage("Hello!", "Deepak", new Date());
console.log(message.formatMessage()); // Output: Deepak [10:30 AM]: Hello!


  