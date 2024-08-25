import { Ship } from "../ship";

test("Battleship game ship", () => {
  const ship = Ship(2);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
