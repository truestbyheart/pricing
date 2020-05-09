import React, { useState } from "react";
export default function Pricing() {
  let [buttonText, setButtonState] = useState("Subscribe");

  const subscribe = (price) => {
    setButtonState("loading...");
    setTimeout(() => {
      setButtonState("Subscribe");
    }, 3000);
  };

  return (
    <div className="container mt-4 center">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Bronze</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $45 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button
              type="button"
              className="btn btn-lg btn-block btn-primary"
              onClick={() => subscribe(45)}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Silver</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $65 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button
              type="button"
              className="btn btn-lg btn-block btn-primary"
              onClick={() => subscribe(65)}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Gold</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $80 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button
              type="button"
              className="btn btn-lg btn-block btn-primary"
              onClick={() => subscribe(80)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
