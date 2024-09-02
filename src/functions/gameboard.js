export function Gameboard(gridSize = 10) {
  const board = [];
  let missedCoordinatesArray = [];

  for (let row = 0; row < gridSize; row++) {
    board[row] = new Array(gridSize).fill(null);
  }

  const checkAnyAxisOutOfGrid = (coordinate) => {
    if (
      coordinate[0] >= 0 &&
      coordinate[0] < 10 &&
      coordinate[1] >= 0 &&
      coordinate[1] < 10
    ) {
      return true;
    } else {
      throw new Error("Coordinates is Out of grid size");
    }
  };

  const _gridBoxAt = (coordinateArr) => {
    const row = coordinateArr[0];
    const column = coordinateArr[1];
    return board[row][column];
  };

  const placeShip = (ship, coordinatesArr) => {
    coordinatesArr.forEach((grid) => {
      const row = grid[0];
      const column = grid[1];

      checkAnyAxisOutOfGrid([row, column]);

      board[row][column] = ship;
    });
  };

  const hasShipAt = (coordinateArr) => {
    checkAnyAxisOutOfGrid(coordinateArr);

    const gridBox = _gridBoxAt(coordinateArr);
    if (
      gridBox === null ||
      gridBox === "empty attack" ||
      gridBox === "hit attack"
    ) {
      return false;
    }

    return true;
  };

  const receiveAttack = (coordinateArr) => {
    checkAnyAxisOutOfGrid(coordinateArr);

    const hasShipCheck = hasShipAt(coordinateArr);
    const gridBox = _gridBoxAt(coordinateArr);

    if (hasShipCheck) {
      gridBox.hit();
      board[coordinateArr[0]][coordinateArr[1]] = "hit attack";
      return "hit attack";
    }
    if (board[coordinateArr[0]][coordinateArr[1]] === null) {
      missedCoordinatesArray.push(coordinateArr);
      board[coordinateArr[0]][coordinateArr[1]] = "empty attack";
      return "empty attack";
    }
    return "Attack again! already attacked grid";
  };

  const areAllShipsSunk = (grid = gridSize) => {
    for (let row = 0; row < grid; row++) {
      for (let column = 0; column < grid; column++) {
        if (hasShipAt([row, column])) {
          return false;
        }
      }
    }
    return true;
  };

  const resetBoard = () => {
    missedCoordinatesArray = [];
    board.forEach((row) => {
      row.forEach((grid) => {
        grid = null;
      });
    });
  };

  return {
    board,
    missedCoordinatesArray,
    placeShip,
    hasShipAt,
    receiveAttack,
    areAllShipsSunk,
    checkAnyAxisOutOfGrid,
    resetBoard,
  };
}
