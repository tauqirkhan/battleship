import { generateRandomNumber, includesAnyCoordinates } from "./utils";

export const computerPlay = (coordinatesArray = []) => {
  const row = generateRandomNumber(10);
  const column = generateRandomNumber(10);
  const randomCoordinate = [row, column];

  const isDuplicateMove = includesAnyCoordinates(
    coordinatesArray,
    randomCoordinate
  );

  if (!isDuplicateMove) {
    return randomCoordinate;
  }

  return computerPlay(coordinatesArray);
};
