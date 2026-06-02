import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../Context/CartContext";

function SwishForm() {
  const navigate = useNavigate();

  const { cart, clearCart } = useContext(CartContext);

  const handleSwish = (e) => {
    e.preventDefault();

    localStorage.setItem("lastOrder", JSON.stringify(cart));

    clearCart();

    navigate("/confirmation");
  };
  return (
    <form onSubmit={handleSwish} className="Payment-form">
      <input
        type="tel"
        placeholder="0701234567"
        minLength={10}
        maxLength={10}
        pattern="[0-9]+" //gör så att man inte kan skriva in bokstäver
        required
      />
    </form>
  );
}

export default SwishForm;
