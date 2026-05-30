import { Link } from "react-router-dom";

function CardItem({ card }) {
  return (
    <Link to={`/product/${card.id}`}>
      <div className="Card-item">
        <img src={card.image} alt={card.name} className="card-image" />

        <div className="Cart-info">
          <h2>{card.name}</h2>
          <p>
            <strong>Price:</strong> {card.price} kr
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
