
function createNotificationManager() {
    let notif = [];
 return {
   add : (not) => notif.push(not) ,
   getNotifications : () => `Notification : ${notif}`
 }
}

// Usage
const notificationManager = createNotificationManager();
notificationManager.add('Your order has been shipped.');
console.log(notificationManager.getNotifications()); // ['Your order has been shipped.']

  