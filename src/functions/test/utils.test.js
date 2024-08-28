import { Gameboard } from "../gameboard";
import {
  includesAnyCoordinates,
  gridValue,
  getAllCoordinatesFromBoard,
} from "../utils";
import { computerPlay } from "../computerPlay";

test("Array of coordinates contains any coordinates", () => {
  const coordinatesArray = [
    [0, 0],
    [0, 1],
    [2, 2],
    [3, 3],
  ];

  const coordinate = [0, 0];
  expect(includesAnyCoordinates(coordinatesArray, coordinate)).toBe(true);
});

test("includesAnyCoordinates with coordinatesArray to be [0, 1] and givenCoordinate to be [0, 0]", () => {
  expect(includesAnyCoordinates([[0, 1]], [0, 0])).toBe(false);
});

test("includesAnyCoordinates with empty coorinatesArray", () => {
  expect(includesAnyCoordinates([], [3, 5])).toBe(false);
});

test("gridValue function that can return 'X', '.' or '' ", () => {
  const grid1 = "hit attack";
  const grid2 = "empty attack";
  const grid3 = null;

  expect(gridValue(grid1)).toBe("X");
  expect(gridValue(grid2)).toBe(".");
  expect(gridValue(grid3)).toBe("");
});

test("getAllCoordinatesFromBoard func to get all coordinates from gameboard", () => {
  const gameboard = Gameboard(10);

  expect(gameboard.board.length).toBe(10);

  const coordinatesArray = [];
  for (let i = 0; i < 73; i++) {
    const currentComputerMove = computerPlay(coordinatesArray);
    coordinatesArray.push(currentComputerMove);
    gameboard.receiveAttack(currentComputerMove);
  }

  expect(getAllCoordinatesFromBoard(gameboard.board).length).toBe(73);
});
