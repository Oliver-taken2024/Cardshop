import { useContext } from "react";

import { CartContext } from "../Context/CartContext";

import CartItem from "../Components/CartItem";

import { Link } from "react-router-dom";

import "../cart.css";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const totalprice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="Cart-back">
      <h1>Cart</h1>
      <div className="Cart-page">
        <div className="Cart-content">
          <div className="Cart-list">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="Cart-summary">
            <h2>Cart Summary</h2>

            <div className="Summary-row">
              <p>
                <strong>Items</strong>
              </p>
              <p>{cart.length}</p>
            </div>
            <div className="Summary-row">
              <h4>Subtotal</h4>
              <p>
                {" "}
                <strong>{totalprice} kr</strong>
              </p>
            </div>
            <Link to="/checkout">
              <button>Check Out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
