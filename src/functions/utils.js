export const includesAnyCoordinates = (coordinatesArray, givenCoordinate) => {
  return coordinatesArray.some(
    (coordinateInArr) =>
      coordinateInArr.length === givenCoordinate.length &&
      coordinateInArr.every((value, index) => value === givenCoordinate[index])
  );
};
