
function createChatManager() {
   const messages = []
  return{
    addMessage : (message) => messages.push(message),
    getMessages : () => messages
  }
}

// Usage
const chat = createChatManager();
chat.addMessage('Hello!');
chat.addMessage('How are you?');
console.log(chat.getMessages()); // ['Hello!', 'How are you?']

  