import { Link } from "react-router-dom";

import "../menu.css";

function CardItem({ card }) {
  return (
    <div className="Card-item">
      <Link to={`/product/${card.id}`} className="card-link">
        <img src={card.image} alt={card.name} className="card-image" />

        <div className="Cart-info">
          <h2>{card.name}</h2>
          <p>
            <strong>Price:</strong> {card.price} kr
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;
