import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../Context/CartContext";

function PaymentForm() {
  const navigate = useNavigate();

  const { cart, clearCart } = useContext(CartContext);

  const handlePayment = (e) => {
    e.preventDefault();

    localStorage.setItem("lastOrder", JSON.stringify(cart));

    clearCart();

    navigate("/confirmation");
  };

  return (
    <form onSubmit={handlePayment} className="Payment-form">
      <input
        type="text"
        placeholder="Card Number"
        minLength={16}
        maxLength={16}
        pattern="[0-9]+"
        required
      />
      <input type="text" placeholder="1234 5678 9012 3456" />
      <input
        type="text"
        placeholder="07/26"
        minLength={5}
        maxLength={5}
        pattern="[0-9]+"
        required
      />
      <input
        type="text"
        placeholder="123"
        minLength={3}
        maxLength={3}
        pattern="[0-9]+"
        required
      />
      <button type="submit">Complete Purchase</button>
    </form>
  );
}

export default PaymentForm;
