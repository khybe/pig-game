import { useState } from "react";
import PigGame from "./components/PigGame";

import "./App.css";

const player1Init = {
  active: true,
  score: 0,
  current: 0,
  won: false,
};

const player2Init = {
  active: false,
  score: 0,
  current: 0,
  won: false,
};

function App() {
  const [player1, setPlayer1] = useState(player1Init);
  const [player2, setPlayer2] = useState(player2Init);

  return (
    <div className="App">
      <PigGame
        onP1Active={player1.active}
        onP1Score={player1.score}
        onP1Current={player1.current}
        onP2Active={player2.active}
        onP2Score={player2.score}
        onP2Current={player2.current}
      />
    </div>
  );
}

export default App;
