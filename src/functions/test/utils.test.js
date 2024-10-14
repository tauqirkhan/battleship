import { Gameboard } from "../gameboard";
import {
  includesAnyCoordinates,
  gridValue,
  getAllCoordinatesFromBoard,
  getRestShipCoordinates,
  getRandomShipCoordinates,
  getRandomLegalShipCoordinates,
  verifyOrGetLegalCoordinates,
  getLegalCoordinates,
  getAdjacentCoordinatesOfXDir,
  getAdjacentCoordinatesOfYDir,
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

test("getShipCoordinate function to get horizontal ship coordinates", () => {
  expect(getRestShipCoordinates([4, 4], 2, "x")).toEqual([
    [4, 4],
    [4, 5],
  ]);

  expect(getRestShipCoordinates([0, 8], 2, "x")).toEqual([
    [0, 8],
    [0, 9],
  ]);
});

test("getShipCoordinate function to get vertical ship coordinates", () => {
  expect(getRestShipCoordinates([0, 0], 2, "y")).toEqual([
    [0, 0],
    [1, 0],
  ]);

  expect(getRestShipCoordinates([8, 9], 2, "y")).toEqual([
    [8, 9],
    [9, 9],
  ]);
});

test("return false if getShipCoordinate function have any out of grid axis", () => {
  expect(getRestShipCoordinates([7, 1], 5, "y")).toBe(false);
  expect(getRestShipCoordinates([5, 1], 5, "y")).not.toBe(false);
});

test("getRandomShipCoordinates function", () => {
  let a = getRandomShipCoordinates(9, "x");
  let b = () => getRandomShipCoordinates(11, "x");

  expect(Array.isArray(a)).toBe(true);
  expect(a).not.toBe(false);
  expect(a.length).toBe(9);
  expect(b).toThrow(Error);
});

test("getRandomLegalShipCoordinates should return valid ship coordinates", () => {
  const allShipsCoordinates = [];
  const shipLength = 3;
  const axis = "x";
  const result = getRandomLegalShipCoordinates(
    allShipsCoordinates,
    shipLength,
    axis
  );

  expect(result).toHaveLength(shipLength);
  expect(
    result.some((coordinate) =>
      includesAnyCoordinates(allShipsCoordinates, coordinate)
    )
  ).toBe(false);
});

test("verifyOrGetLegalCoordinates should return legal coordinates", () => {
  const allShipsCoordinates = [
    [0, 0],
    [0, 1],
    [0, 2],
  ];
  const shipCoordinates = [
    [0, 3],
    [0, 4],
    [0, 5],
  ];

  const result = verifyOrGetLegalCoordinates(
    shipCoordinates,
    allShipsCoordinates
  );

  expect(result).toHaveLength(shipCoordinates.length);
  expect(
    result.some((coordinate) =>
      includesAnyCoordinates(allShipsCoordinates, coordinate)
    )
  ).toBe(false);
});

test("getLegalCoordinates should return a legal set of coordinates", () => {
  const allShipsCoordinates = [
    [0, 0],
    [0, 1],
    [0, 2],
  ];
  const length = 3;

  const result = getLegalCoordinates(length, allShipsCoordinates);

  expect(result).toHaveLength(length);
  expect(
    result.some((coordinate) =>
      includesAnyCoordinates(allShipsCoordinates, coordinate)
    )
  ).toBe(false);
});

test("getAdjacentCoordinatesOfXDir that returns adjacent x-axis ship coordinates", () => {
  const coordinatesArray1 = [
    [5, 5],
    [5, 6],
    [5, 7],
  ];
  const adjacentCoordinates1 = [
    [5 + 1, 5],
    [5 + 1, 6],
    [5 + 1, 7],
    [5 - 1, 5],
    [5 - 1, 6],
    [5 - 1, 7],
    [5 - 1, 5 - 1],
    [5, 5 - 1],
    [5 + 1, 5 - 1],
    [5 - 1, 7 + 1],
    [5, 7 + 1],
    [5 + 1, 7 + 1],
  ];

  const adjacentCoordinates = getAdjacentCoordinatesOfXDir(coordinatesArray1);

  adjacentCoordinates.forEach((adjacentCoordinate) => {
    expect(
      includesAnyCoordinates(adjacentCoordinates1, adjacentCoordinate)
    ).toBe(true);
  });
});

test("getAdjacentCoordinatesOfXDir that returns adjacent x-axis ship coordinates of startCoordinate = [0, 0] ", () => {
  const coordinatesArray2 = [
    [0, 0],
    [0, 1],
    [0, 2],
  ];

  const adjacentCoordinates2 = [
    [0 + 1, 0],
    [0 + 1, 1],
    [0 + 1, 2],
    [0 + 1, 2 + 1],
    [0, 2 + 1],
  ];

  const adjacentCoordinates = getAdjacentCoordinatesOfXDir(coordinatesArray2);

  adjacentCoordinates.forEach((adjacentCoordinate) => {
    expect(
      includesAnyCoordinates(adjacentCoordinates2, adjacentCoordinate)
    ).toBe(true);
  });
});

test("getAdjacentCoordinatesOfYDir that returns adjacent y-axis ship coordinates", () => {
  const coordinatesArr2 = [
    [5, 5],
    [6, 5],
    [7, 5],
  ];

  const adjacentCoordinates2 = [
    [5 - 1, 5 - 1],
    [5 - 1, 5 + 0],
    [5 - 1, 5 + 1],
    [5 + 0, 5 + 1],
    [5 + 0, 5 - 1],
    [6, 5 + 1],
    [6, 5 - 1],
    [7, 5 + 1],
    [7, 5 - 1],
    [7 + 1, 5 - 1],
    [7 + 1, 5 + 0],
    [7 + 1, 5 + 1],
  ];

  const adjacentCoordinates = getAdjacentCoordinatesOfYDir(coordinatesArr2);

  adjacentCoordinates.forEach((adjacentCoordinate) => {
    expect(
      includesAnyCoordinates(adjacentCoordinates2, adjacentCoordinate)
    ).toBe(true);
  });
});
