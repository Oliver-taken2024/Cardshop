import { useState } from "react";

import PaymentForm from "../Components/PaymentForm";

import SwishForm from "../Components/SwishForm";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <div>
      <h1>Checkout</h1>

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
