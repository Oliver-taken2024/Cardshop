import { useContext } from "react";

import { CartContext } from "../Context/CartContext";

import CartItem from "../Components/CartItem";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalprice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="Cart-page">
      <h1>Cart</h1>

      <div className="Cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      <div className="Cart-summary">
        <h2>Cart Summary</h2>

        <div className="Summary-row">
          <p>Items</p>
          <p>{cart.length}</p>
        </div>
        <div className="Summary-row">
          <p>Subtotal</p>
          <p>{totalprice} kr</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
