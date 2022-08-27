const Player = (props) => {
  return (
    <div className={`${"player"} ${props.className}`}>
      <h2 className="name">PLAYER {props.number}</h2>
      <p className="score">{props.score}</p>
      <div className="current-container">
        <p className="current-label">CURRENT</p>
        <p className="current-score">{props.current}</p>
      </div>
    </div>
  );
};

export default Player;
