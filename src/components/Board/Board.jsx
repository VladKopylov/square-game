import classnames from "classnames";
import styles from "./Board.module.scss";

const Board = ({ children, boardSize, isGameStarted }) => {
  return (
    <div
      className={classnames(styles.board, styles[`boardSize_${boardSize}`], {
        [styles.boardBlocked]: !isGameStarted,
      })}
    >
      {children}
    </div>
  );
};

export { Board };
