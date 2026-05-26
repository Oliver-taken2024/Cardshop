import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardItem from "../Components/CardItem";

function Menu() {
  const [cards, setCards] = useState([]);
  // Här får menu category värdet av 1
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((res) => res.json())
      .then((data) => {
        //här går filter igenom alla kort och leta efter alla kort som har samma category nummer som menu hämtade
        const filteredCards = data.filter(
          //eftersom det som skickades är en string och card.category är en int så använder man Number för att göra det till en int kan man säga
          (card) => card.category === Number(categoryId),
        );

        setCards(filteredCards);
      });
  }, [categoryId]);

  return (
    <div className="menu-container">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Menu;
