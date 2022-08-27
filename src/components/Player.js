import styles from "./Player.module.css";

const Player = (props) => {
  return (
    <div className={`${styles.player} ${props.className}`}>
      <h2 className={styles.name}>PLAYER {props.number}</h2>
      <p className={styles.score}>{props.score}</p>
      <div className={styles["current-container"]}>
        <p className={styles["current-label"]}>CURRENT</p>
        <p className={styles["current-score"]}>{props.current}</p>
      </div>
    </div>
  );
};

export default Player;
