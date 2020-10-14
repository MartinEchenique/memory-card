import React from 'react';
import Cards from './Card';

function CardsContainer(props) {
  const { handleClick, cardsData } = props;
  function shuffleArray() {
    let array = cardsData.map((card) => (
      <Cards data={card} key={card.id} handleClick={handleClick} />
    ));
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return <div className="gameContainer">{shuffleArray()}</div>;
}

export default CardsContainer;
