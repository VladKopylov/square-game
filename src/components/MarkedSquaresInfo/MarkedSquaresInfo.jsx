import styles from "./MarkedSquaresInfo.module.scss";

const MarkedSquaresInfo = ({ markedSquares }) => {
  return (
    <div>
      <h2 className={styles.title}>Marked squares</h2>

      {!markedSquares.length && (
        <p>Start marking squares to see info about position</p>
      )}
      <div>
        {markedSquares.map((el) => {
          const [row, col] = el.position;

          return (
            <div key={el.id} className={styles.info}>
              row {row} col {col}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { MarkedSquaresInfo };
