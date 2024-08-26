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
