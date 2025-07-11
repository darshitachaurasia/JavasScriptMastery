
function detectFraud(transactions, thresholdAmount) {

 const suspicious = transactions.filter((transaction)=> transaction.amount > thresholdAmount);
 return suspicious.length>0
    
}

// Function call example
const transactions = [
  { amount: 500, timestamp: Date.now() - 1000 },
  { amount: 600, timestamp: Date.now() - 2000 },
];
console.log(detectFraud(transactions, 400)); // true
console.log(detectFraud(transactions, 700)); 
 
  