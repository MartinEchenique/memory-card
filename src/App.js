import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';
import GameOver from './components/GameOver';
import Header from './components/Header';

function App(props) {
  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [gameOver, setGameOver] = useState(null);
  const { cardsData } = props;

  const prevGameStatus = useRef();
  const prevMaxPointStatus = useRef();
  useEffect(() => {
    prevMaxPointStatus.current = maxPoints;
    prevGameStatus.current = gameOver;
  }, [gameOver, maxPoints]);
  const prevGame = prevGameStatus.current;
  const prevMaxPoint = prevMaxPointStatus.current;

  useEffect(() => {
    if (prevGame !== gameOver && prevGame === null) {
      if (maxPoints < points) setMaxPoints(points);
    }
  }, [gameOver, maxPoints, points, prevGame]);
  useEffect(() => {
    if (clicked.length === cardsData.length) setGameOver(true);
    setPoints(clicked.length);
  }, [clicked, cardsData]);

  function handleClick(id) {
    if (gameOver === null) {
      if (clicked.includes(id)) setGameOver(false);
      else {
        setClicked([...clicked, id]);
      }
    }
  }
  function handleRestartGame() {
    setGameOver(null);
    setPoints(0);
    setClicked([]);
  }

  const render = () => {
    if (gameOver === null) {
      return (
        <div>
          <Header
            handleRestartGame={handleRestartGame}
            points={points}
            maxPoints={maxPoints}
          />
          <div className="App">
            <CardsContainer cardsData={cardsData} handleClick={handleClick} />
          </div>
        </div>
      );
    } else {
      return (
        <GameOver
          record={points > prevMaxPoint}
          points={points}
          maxPoints={maxPoints}
          handleRestartGame={handleRestartGame}
        />
      );
    }
  };

  return render();
}

export default App;
