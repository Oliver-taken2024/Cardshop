import { Link } from "react-router-dom";

function Confirmation() {
  const order = JSON.parse(localStorage.getItem("lastOrder")) || [];

  const totalPrice = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="Confirmation-page">
      <h1>Thank you for your order</h1>
      <h2>Your Order</h2>

      {/* SHOW PRODUCTS */}

      {order.map((item) => (
        <div key={item.id} className="confirmation-item">
          <img src={item.image} alt={item.name} width="120" />

          <div>
            <h3>{item.name}</h3>

            <p>
              Quantity:
              {item.quantity}
            </p>

            <p>
              Price:
              {item.price} kr
            </p>
          </div>
        </div>
      ))}

      <h2>
        Total:
        {totalPrice} kr
      </h2>
      <Link to="/">
        <button>Tillbaka till Home</button>
      </Link>
    </div>
  );
}

export default Confirmation;
