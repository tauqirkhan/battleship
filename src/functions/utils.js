export const includesAnyCoordinates = (coordinatesArray, givenCoordinate) => {
  return coordinatesArray.some((coordinateInArr) =>
    givenCoordinate.every((axis) => coordinateInArr.includes(axis))
  );
};
