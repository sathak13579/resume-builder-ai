import React from 'react';

function PaymentButton({ onSuccess }) {
  const handlePayment = () => {
    // Placeholder for payment integration (e.g., Stripe)
    console.log('Processing payment...');
    
    // Simulate payment success for demo
    setTimeout(() => {
      alert('Payment successful!');
      onSuccess();
    }, 1000);
  };

  return (
    <div className="payment-section">
      <p>Unlock PDF export for $5.99</p>
      <button onClick={handlePayment} className="payment-button">
        Proceed to Payment
      </button>
    </div>
  );
}

export default PaymentButton;