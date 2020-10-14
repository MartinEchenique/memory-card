import React from 'react';

function GameOver(props) {
  const { record, maxPoints, points, handleRestartGame } = props;
  const text = record ? ' NEW RECORD! ' : ' TRY AGAIN! ';

  return (
    <div className={`gameOverDisplay`}>
      <h2>{text}</h2>
      <ul>
        <li>Points: {points}</li> <li> Max Points: {maxPoints}</li>
      </ul>
      <button onClick={handleRestartGame}>Play again</button>
    </div>
  );
}
export default GameOver;
