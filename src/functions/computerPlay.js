import { generateRandomNumber, includesAnyCoordinates } from "./utils";

export const computerPlay = (coordinatesArray = []) => {
  const row = generateRandomNumber(10);
  const column = generateRandomNumber(10);
  const randomCoordinates = [row, column];

  if (includesAnyCoordinates(coordinatesArray, randomCoordinates) === false) {
    return randomCoordinates;
  }

  return computerPlay(coordinatesArray);
};
