import { Randomise } from "../randomise";

const randomise = Randomise();

test("Randomise carrierCoordinates output", () => {
  expect(randomise.carrierCoordinates.length).toBe(5);
});

test("Randomise battleshipCoordinates output", () => {
  expect(randomise.battleshipCoordinates.length).toBe(4);
});

test("Randomise cruiserCoordinates output", () => {
  expect(randomise.cruiserCoordinates.length).toBe(3);
});

test("Randomise submarineCoordinates output", () => {
  expect(randomise.submarineCoordinates.length).toBe(2);
});

test("Randomise destroyerCoordinates output", () => {
  expect(randomise.destroyerCoordinates.length).toBe(1);
});

test("Randomise allShipsCoordinates array", () => {
  expect(randomise.allShipsCoordinates.length).toBe(5 + 4 + 3 + 2 + 1);
});
