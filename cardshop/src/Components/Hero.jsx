import { Link } from "react-router-dom";

import "../home.css";

function Hero() {
  return (
    <section className="Hero">
      <div className="Hero-overlay">
        <h1>Rare Trading Cards</h1>

        <p>Pokemon, Yu-Gi-Oh, One Piece and more</p>
        <Link to="/menu/3">
          <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
