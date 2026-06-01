import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardItem from "../Components/CardItem";

function Menu() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
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

  const filteredCards = cards.filter((card) => {
    return (
      (selectedCondition === "" || card.condition === selectedCondition) &&
      // LANGUAGE

      (selectedLanguage === "" || card.language === selectedLanguage)
    );
  });

  return (
    <div className="Menu-page">
      <button onClick={() => setShowFilter(true)} className="Filter-button">
        Filter
      </button>
      {showFilter && (
        <div className="Filter-sidebar">
          <button onClick={() => setShowFilter(false)} className="Close-filter">
            X
          </button>

          <h2>Filter</h2>

          <h3>Condition</h3>

          <button
            onClick={() => setSelectedCondition("mint")}
            className="filter-button"
          >
            Mint
          </button>
          <button
            onClick={() => setSelectedCondition("near mint")}
            className="filter-button"
          >
            near mint
          </button>
          <button
            onClick={() => setSelectedCondition("")}
            className="filter-button"
          >
            Clear Condition
          </button>

          <h3>Language</h3>

          <button
            onClick={() => setSelectedLanguage("english")}
            className="filter-button"
          >
            English
          </button>

          <button
            onClick={() => setSelectedLanguage("japanese")}
            className="filter-button"
          >
            Japanese
          </button>

          <button
            onClick={() => setSelectedLanguage("")}
            className="filter-button"
          >
            Clear Language
          </button>
        </div>
      )}
      <div className="menu-container">
        {filteredCards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
