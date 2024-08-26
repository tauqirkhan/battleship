import { includesAnyCoordinates } from "../utils";

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
