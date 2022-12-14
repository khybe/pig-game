import { useState, useEffect } from "react";

import Layout from "./components/Layout";
import Player from "./components/Player";
import Controls from "./components/Controls";

import styles from "./App.module.css";

let player1Init = {
  active: true,
  current: 0,
  score: 0,
  won: false,
};

let player2Init = {
  active: false,
  current: 0,
  score: 0,
  won: false,
};

function App() {
  const [showDice, setShowDice] = useState(false);
  const [player1, setPlayer1] = useState(player1Init);
  const [player2, setPlayer2] = useState(player2Init);
  const [diceNumber, setDiceNumber] = useState(null);

  console.log(player1);
  console.log(player2);

  useEffect(() => {
    if (player1.score >= 100) {
      setPlayer1({
        ...player1,
        won: true,
      });
    } else if (player2.score >= 100) {
      setPlayer2({
        ...player2,
        won: true,
      });
    }
  }, [player1.score, player2.score]);

  // New game event handler
  const handleRestart = () => {
    setShowDice(false);
    setPlayer1(player1Init);
    setPlayer2(player2Init);
  };

  // Roll event handler
  const handleRollDice = () => {
    setShowDice(true);

    // Generate random dice number from 1 to 6
    const diceNumber = Math.floor(Math.random() * 6 + 1);
    setDiceNumber(diceNumber);
    console.log(diceNumber);

    if (player1.active === true) {
      if (diceNumber === 1) {
        setPlayer1({
          ...player1,
          current: 0,
          active: false,
        });
        setPlayer2({
          ...player2,
          active: true,
        });
      } else {
        setPlayer1({
          ...player1,
          current: player1.current + diceNumber,
        });
      }
    } else if (player2.active === true) {
      if (diceNumber === 1) {
        setPlayer2({
          ...player2,
          current: 0,
          active: false,
        });
        setPlayer1({
          ...player1,
          active: true,
        });
      } else {
        setPlayer2({
          ...player2,
          current: player2.current + diceNumber,
        });
      }
    }
  };

  // Hold event handler
  const handleHold = () => {
    if (player1.active === true) {
      setPlayer1({
        ...player1,
        score: player1.score + player1.current,
        current: 0,
        active: false,
      });

      setPlayer2({
        ...player2,
        active: true,
      });
    } else if (player2.active === true) {
      setPlayer2({
        ...player2,
        score: player2.score + player2.current,
        current: 0,
        active: false,
      });

      setPlayer1({
        ...player1,
        active: true,
      });
    }
  };

  const player1Classes = player1.active
    ? `${styles["active-player"]} ${styles.p1}`
    : player1.won
    ? `${styles.won} ${styles["victor-name"]} ${styles.p1}`
    : styles.p1;

  const player2Classes = player2.active
    ? `${styles["active-player"]} ${styles.p2}`
    : player2.won
    ? `${styles.won} ${styles["victor-name"]} ${styles.p2}`
    : styles.p2;

  return (
    <div className={styles.App}>
      <Layout>
        <Player
          number={1}
          className={player1Classes}
          score={player1.score}
          current={player1.current}
        />
        <Controls
          onRestart={handleRestart}
          diceNumber={diceNumber}
          onShowDice={showDice}
          onRollDice={handleRollDice}
          onHold={handleHold}
        />
        <Player
          number={2}
          className={player2Classes}
          score={player2.score}
          current={player2.current}
        />
      </Layout>
    </div>
  );
}

export default App;
