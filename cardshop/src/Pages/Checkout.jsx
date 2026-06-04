import { useState } from "react";

import { useNavigate } from "react-router-dom";
import PaymentForm from "../Components/PaymentForm";

import SwishForm from "../Components/SwishForm";

import "../checkout.css";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // VALIDATION

  const handleCheckout = () => {
    // CHECK NAME

    if (name.length < 2) {
      setError("Please enter your name");

      return;
    }

    // CHECK EMAIL

    if (!email.includes("@")) {
      setError("Please enter a valid email");

      return;
    }

    // CLEAR ERROR

    setError("");

    // // SUCCESS

    navigate("/confirmation");
  };

  return (
    <div className="check-main">
      <h1>Checkout</h1>

      <div className="Customer-info">
        <h2>Customer Information</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {error && <p className="Error">{error}</p>}
      </div>

      <div>
        <button onClick={() => setPaymentMethod("card")}>Card</button>

        <button onClick={() => setPaymentMethod("swish")}>Swish</button>
      </div>

      {/* conditional rendering */}
      {paymentMethod === "card" && <PaymentForm />}
      {paymentMethod === "swish" && <SwishForm />}

      <button onClick={handleCheckout}>Continue</button>
    </div>
  );
}

export default Checkout;
