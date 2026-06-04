import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import CardItem from "../Components/CardItem";

function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((res) => res.json())
      .then((data) => {
        // ta några "populära"

        const shuffled = data.sort(() => 0.5 - Math.random());
        setCards(shuffled.slice(0, 6));
        // första 6 korten
      });
  }, []);

  return (
    <div className="Home-page">
      <Hero />

      <h2 className="home-title">Popular Cards</h2>

      <div className="home-cards">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
