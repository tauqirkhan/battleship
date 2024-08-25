import { includesAnyCoordinates } from "../utils";

test("Array of coordinates contains any coordinates", () => {
  const coordinatesArray = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
  ];

  const coordinate = [2, 2];
  expect(includesAnyCoordinates(coordinatesArray, coordinate)).toBe(true);
});
