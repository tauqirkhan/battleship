export const includesAnyCoordinates = (coordinatesArray, givenCoordinate) => {
  return coordinatesArray.some(
    (coordinateInArr) =>
      coordinateInArr.length === givenCoordinate.length &&
      coordinateInArr.every((value, index) => value === givenCoordinate[index])
  );
};

export const gridValue = (grid) => {
  let gridValue = "";
  if (grid === "hit attack") {
    gridValue = "X";
  }
  if (grid === "empty attack") {
    gridValue = ".";
  }
  return gridValue;
};

export const generateRandomNumber = (max = 10, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getAllCoordinatesFromBoard = (board) => {
  const allCoordinates = [];

  board.forEach((row, rowIndex) => {
    row.forEach((grid, columnIndex) => {
      // null and object are both typeof 'object'
      if (typeof grid !== "object") {
        allCoordinates.push([rowIndex, columnIndex]);
      }
    });
  });

  return allCoordinates;
};
