import { useState } from "react";

import PaymentForm from "../Components/PaymentForm";

import SwishForm from "../Components/SwishForm";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  return (
    <div>
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
      </div>

      <div>
        <button onClick={() => setPaymentMethod("card")}>Card</button>

        <button onClick={() => setPaymentMethod("swish")}>Swish</button>
      </div>

      {/* conditional rendering */}
      {paymentMethod === "card" && <PaymentForm />}
      {paymentMethod === "swish" && <SwishForm />}
    </div>
  );
}

export default Checkout;
