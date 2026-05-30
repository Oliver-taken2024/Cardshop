function CartItem({ item, removeFromCart }) {
  return (
    <div className="Cart-item">
      <img src={item.image} alt={item.name} className="Cart-image" />

      <div className="Cart-info">
        <h2>{item.name}</h2>

        <p>{item.condition}</p>

        <p>{item.price} kr</p>
      </div>

      <div className="Shipping-section">
        <button>Standard</button>

        <button>Expedited</button>
      </div>

      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
