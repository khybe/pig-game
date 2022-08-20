import dice1 from "../../src/assets/dice-1.png";

const PigGame = (props) => {
  const player1Classes = props.onP1Active
    ? "player p1 active-player"
    : "player p1";
  const player2Classes = props.onP2Active
    ? "player p2 active-player"
    : "player p2";

  return (
    <div className="main-container">
      <div className={player1Classes}>
        <h2 className="name">PLAYER 1</h2>
        <p className="score">{props.onP1Score}</p>
        <div className="current-container">
          <p className="current-label">CURRENT</p>
          <p className="current-score">{props.onP1Current}</p>
        </div>
      </div>
      <div className="absolute-container">
        <button className="new-game-btn">🔄 NEW GAME</button>
        <img className="dice" src={dice1} alt="Dice" />
        <button className="roll-dice-btn">🎲 ROLL DICE</button>
        <button className="hold-btn">📥 HOLD</button>
      </div>
      <div className={player2Classes}>
        <h2 className="name">PLAYER 2</h2>
        <p className="score">{props.onP2Score}</p>
        <div className="current-container ">
          <p className="current-label">CURRENT</p>
          <p className="current-score">{props.onP2Current}</p>
        </div>
      </div>
    </div>
  );
};

export default PigGame;
