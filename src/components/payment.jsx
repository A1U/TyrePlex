import React from 'react';

function Payment() {
  return (
    <>
      <div className="container my-5 p-4 shadow-lg rounded payment-container">
        <h3 className="mb-4">Payment Mode</h3>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <div className="d-flex align-items-center">
              <i className="ri-check-fill me-2"></i> Deposit To Account
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="d-flex align-items-center">
              <i className="ri-check-fill me-2"></i> Credit Card/Debit Card
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="d-flex align-items-center text-success">
              <i className="ri-check-fill me-2"></i> Net Banking
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="d-flex align-items-center text-success">
              <i className="ri-check-fill me-2"></i> UPI
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="d-flex align-items-center">
              <i className="ri-check-fill me-2"></i> Wallets (PhonePe/AmazonPay/Paytm)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
