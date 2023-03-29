import classnames from "classnames";
import styles from "./Square.module.scss";

const Square = ({ item, onHover }) => {
  return (
    <div
      className={classnames(styles.square, {
        [styles.squareMarked]: item.isHovered,
      })}
      onMouseEnter={onHover(item.id)}
    />
  );
};

export { Square };
