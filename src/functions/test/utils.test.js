import { includesAnyCoordinates, gridValue } from "../utils";

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

test("gridValue function that can return 'X', '.' or unedefined", () => {
  const grid1 = {};
  const grid2 = "empty attack";
  const grid3 = null;

  expect(gridValue(grid1)).toBe("X");
  expect(gridValue(grid2)).toBe(".");
  expect(gridValue(grid3)).toBe(undefined);
});
