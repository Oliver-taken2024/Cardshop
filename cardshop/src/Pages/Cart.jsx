import { useContext } from "react";

import { CartContext } from "../Context/CartContext";

import CartItem from "../Components/CartItem";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
}

export default Cart;
