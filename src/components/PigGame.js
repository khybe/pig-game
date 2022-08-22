import dice1 from "../../src/assets/dice-1.png";
import dice2 from "../../src/assets/dice-2.png";
import dice3 from "../../src/assets/dice-3.png";
import dice4 from "../../src/assets/dice-4.png";
import dice5 from "../../src/assets/dice-5.png";
import dice6 from "../../src/assets/dice-6.png";

const PigGame = (props) => {
  const player1Classes = props.player1Active
    ? "player p1 active-player"
    : props.player1Won
    ? "player p1 won"
    : "player p1";

  const player2Classes = props.player2Active
    ? "player p2 active-player"
    : props.player2Won
    ? "player p2 won"
    : "player p2";

  let dice = null;

  switch (props.diceNumber) {
    case 1:
      dice = dice1;
      break;
    case 2:
      dice = dice2;
      break;
    case 3:
      dice = dice3;
      break;
    case 4:
      dice = dice4;
      break;
    case 5:
      dice = dice5;
      break;
    default:
      dice = dice6;
  }
  return (
    <div className="main-container">
      <div className={player1Classes}>
        <h2 className={props.player1Won ? "name victor-name-style" : "name"}>
          PLAYER 1
        </h2>
        <p className="score">{props.player1Score}</p>
        <div className="current-container">
          <p className="current-label">CURRENT</p>
          <p className="current-score">{props.player1Current}</p>
        </div>
      </div>
      <div className="absolute-container">
        <div className="absolute-within-container">
          <button className="new-game-btn" onClick={props.onRestart}>
            🔄 NEW GAME
          </button>
          {props.onShowDice && <img className="dice" src={dice} alt="Dice" />}
        </div>
        <button className="roll-dice-btn" onClick={props.onRollDice}>
          🎲 ROLL DICE
        </button>
        <button className="hold-btn" onClick={props.onHold}>
          📥 HOLD
        </button>
      </div>
      <div className={player2Classes}>
        <h2 className={props.player2Won ? "name victor-name-style" : "name"}>
          PLAYER 2
        </h2>
        <p className="score">{props.player2Score}</p>
        <div className="current-container ">
          <p className="current-label">CURRENT</p>
          <p className="current-score">{props.player2Current}</p>
        </div>
      </div>
    </div>
  );
};

export default PigGame;
