import React from 'react';

function Header(props) {
  const { handleRestartGame, points, maxPoints } = props;
  return (
    <div className={`game-header`}>
      <h1>POKEMON MEMORY CARD GAME</h1>
      <div>{`Points: ${points}   Max Points: ${maxPoints}`}</div>
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
}
export default Header;
