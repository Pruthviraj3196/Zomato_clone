// src/components/PaymentSuccess.js
import React from 'react';
import './PaymentSuccessfull.css'; // Import the CSS file


const PaymentSuccessfull = () => {
  return (
    <div className="success-container">
      
      <h1 className="message">Payment Successful!</h1>
      <p className="description">Your transaction has been completed successfully.</p>
    </div>
  );
};


export default PaymentSuccessfull;