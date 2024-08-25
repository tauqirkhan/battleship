import { includesAnyCoordinates } from "./utils";

export function Gameboard(gridSize) {
  const board = [];
  const missedCoordinatesArray = [];
  const hitCoordinates = [];

  for (let row = 0; row < gridSize; row++) {
    board[row] = new Array(gridSize).fill(null);
  }

  const checkAnyAxisOutOfGrid = (coordinate, gridSize = 10) => {
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
    if (!gridBox) return false;
    return true;
  };

  const totalNumOfHitOnShipAt = (coordinateArr) => {
    checkAnyAxisOutOfGrid(coordinateArr);

    const hasShipCheck = hasShipAt(coordinateArr);
    const gridBox = _gridBoxAt(coordinateArr);

    if (!hasShipCheck) return;
    return gridBox.getNumOfHit();
  };

  const receiveAttack = (coordinateArr) => {
    checkAnyAxisOutOfGrid(coordinateArr);

    const hasShipCheck = hasShipAt(coordinateArr);
    const gridBox = _gridBoxAt(coordinateArr);

    if (hasShipCheck) {
      if (!includesAnyCoordinates(hitCoordinates, coordinateArr)) {
        gridBox.hit();
        hitCoordinates.push(coordinateArr);
        return;
      }
    }
    if (!hasShipCheck) {
      if (!includesAnyCoordinates(missedCoordinatesArray, coordinateArr)) {
        missedCoordinatesArray.push(coordinateArr);
        return;
      }
    }
    return "Attack again! already attacked grid";
  };

  const areAllShipsSunk = (grid = gridSize) => {
    for (let row = 0; row < grid; row++) {
      for (let column = 0; column < grid; column++) {
        if (hasShipAt([row, column])) {
          if (board[row][column].isSunk() === false) return false;
        }
      }
    }
    return true;
  };

  return {
    missedCoordinatesArray,
    placeShip,
    hasShipAt,
    receiveAttack,
    totalNumOfHitOnShipAt,
    areAllShipsSunk,
    checkAnyAxisOutOfGrid,
  };
}
