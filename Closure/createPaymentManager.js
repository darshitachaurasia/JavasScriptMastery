
function createPaymentManager() {
    let amount = null
  return {
        initPayment: (details) => `Payment of ${details.amount} ${details.currency} initialized.`,
    confirmPayment: (details) => `Payment of ${details.amount} ${details.currency} confirmed.`
    }

    
}

// Usage
const paymentManager = createPaymentManager();
console.log(paymentManager.initPayment({ amount: 100, currency: 'USD' }));
console.log(paymentManager.confirmPayment({ amount: 100, currency: 'USD' }));


  