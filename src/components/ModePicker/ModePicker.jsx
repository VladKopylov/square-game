import { Button, Select } from "@mantine/core";
import styles from "./ModePicker.module.scss";

const ModePicker = ({
  gameModes,
  onSelectMode,
  onStartGame,
  isDisabledStartGameBtn,
}) => {
  return (
    <div className={styles.container}>
      <Select
        data={gameModes}
        onChange={onSelectMode}
        placeholder="Pick mode..."
      />

      <Button onClick={onStartGame} disabled={isDisabledStartGameBtn}>
        Start
      </Button>
    </div>
  );
};

export { ModePicker };
