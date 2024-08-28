import { computerPlay } from "../computerPlay";
import { includesAnyCoordinates } from "../utils";

test("computer player is making random move and hitting same coordinate twice", () => {
  const coordinatesArray = [];
  for (let i = 0; i < 100; i++) {
    const currentComputerMove = computerPlay(coordinatesArray);
    expect(includesAnyCoordinates(coordinatesArray, currentComputerMove)).toBe(
      false
    );
    coordinatesArray.push(currentComputerMove);
  }
  expect(coordinatesArray.length === 100).toBe(true);
});
