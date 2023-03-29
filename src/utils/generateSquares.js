export const generateSquares = (boardSize) => {
  return Array.from({ length: boardSize * boardSize }, (_, i) => ({
    id: String(i + 1),
    isHovered: false,
    position: [
      Math.ceil((i + 1) / boardSize),
      (i + 1) % boardSize || boardSize,
    ],
  }));
};
