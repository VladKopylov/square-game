import { useState } from "react";
import { LoadingOverlay } from "@mantine/core";

import { Square } from "./components/Square/Square.jsx";
import { Board } from "./components/Board/Board.jsx";
import { MarkedSquaresInfo } from "./components/MarkedSquaresInfo/MarkedSquaresInfo.jsx";
import { ModePicker } from "./components/ModePicker/ModePicker.jsx";
import { useLoadGameModes } from "./hooks/useLoadGameModes.js";
import { generateSquares } from "./utils/generateSquares.js";

import styles from "./App.module.scss";

function App() {
  const { gameModes, isLoading: isLoadingGameModes } = useLoadGameModes();
  const [isGameStarted, setStartGame] = useState(false);
  const [boardSize, setBoardSize] = useState(null);

  const [squares, setSquares] = useState(() => generateSquares(boardSize));
  const markedSquares = squares.filter((el) => el.isHovered);
  const isDisabledStartGameBtn = !boardSize || isGameStarted;

  const handleHoverSquare = (id) => () => {
    const nextSquares = squares.map((el) => {
      if (el.id === id) {
        return { ...el, isHovered: !el.isHovered };
      } else {
        return el;
      }
    });

    setSquares(nextSquares);
  };

  const handleSelectGameMode = (boardSize) => {
    setBoardSize(boardSize);
    setSquares(generateSquares(boardSize));
    setStartGame(false);
  };

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <div className={styles.app}>
      <LoadingOverlay visible={isLoadingGameModes} overlayBlur={2} />
      <div>
        <ModePicker
          gameModes={gameModes}
          isDisabledStartGameBtn={isDisabledStartGameBtn}
          onSelectMode={handleSelectGameMode}
          onStartGame={handleStartGame}
        />
        {boardSize && (
          <Board boardSize={boardSize} isGameStarted={isGameStarted}>
            {squares.map((el) => (
              <Square key={el.id} item={el} onHover={handleHoverSquare} />
            ))}
          </Board>
        )}
      </div>
      <MarkedSquaresInfo markedSquares={markedSquares} />
    </div>
  );
}

export default App;
