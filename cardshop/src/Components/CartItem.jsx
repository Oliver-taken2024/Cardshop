import "../cart.css";

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="Cart-item">
      <img src={item.image} alt={item.name} className="Cart-image" />

      <div className="Cart-info">
        <h2>{item.name}</h2>

        <p>{item.condition}</p>
        <p>Quantity:{item.quantity}</p>
        <p>{item.price} kr</p>
      </div>

      <div className="Cart-actions">
        <div className="Quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>

          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>

        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
