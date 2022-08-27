import dice1 from "../../src/assets/dice-1.png";
import dice2 from "../../src/assets/dice-2.png";
import dice3 from "../../src/assets/dice-3.png";
import dice4 from "../../src/assets/dice-4.png";
import dice5 from "../../src/assets/dice-5.png";
import dice6 from "../../src/assets/dice-6.png";

const Controls = (props) => {
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
  );
};

export default Controls;
