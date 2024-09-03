import { experiments } from "webpack";
import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

// test("battleship game testboard", () => {
let gameboard;
let ship1;
let ship2;
let coordinate;

beforeEach(() => {
  gameboard = Gameboard(10);
  ship1 = Ship(2);
  ship2 = Ship(3);
  coordinate = [
    [
      [2, 1],
      [2, 0],
    ],
    [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
  ];
});

test("Place ship1 object to coordinates[0]", () => {
  gameboard.placeShip(ship1, coordinate[0]);
  expect(gameboard.hasShipAt(coordinate[0][0])).toBe(true);
});

test("Place ship2 object to coordinates[1]", () => {
  gameboard.placeShip(ship2, coordinate[1]);
  expect(gameboard.hasShipAt(coordinate[1][0])).toBe(true);
});

test("recieveAttack at coordinate[0][0] and hit ship if it had ship", () => {
  gameboard.placeShip(ship2, coordinate[0]);

  const hitSpy = jest.spyOn(ship2, "hit");

  const result = gameboard.receiveAttack(coordinate[0][0]);

  expect(hitSpy).toHaveBeenCalled();
  expect(ship2.getNumOfHit()).toBe(1);
});

test("Record the coordinate of missed shot on ship", () => {
  gameboard.receiveAttack([5, 5]);
  gameboard.receiveAttack([9, 5]);
  gameboard.receiveAttack([3, 5]);
  expect(gameboard.missedCoordinatesArray).toEqual([
    [5, 5],
    [9, 5],
    [3, 5],
  ]);
});

test("recieveAttack method on null coordinates and set it to 'empty attack' string", () => {
  gameboard.receiveAttack([0, 9]);
  gameboard.receiveAttack([0, 0]);

  expect(gameboard.board[0][0]).toBe("empty attack");
});

test("Report whether all ships are sunk", () => {
  gameboard.placeShip(ship1, coordinate[0]);

  gameboard.receiveAttack(coordinate[0][0]);
  gameboard.receiveAttack(coordinate[0][1]);
  expect(gameboard.areAllShipsSunk()).toBe(true);

  gameboard.placeShip(ship2, coordinate[1]);

  gameboard.receiveAttack(coordinate[1][0]);
  gameboard.receiveAttack(coordinate[1][1]);
  expect(gameboard.areAllShipsSunk()).toBe(false);

  gameboard.receiveAttack(coordinate[1][2]);
  expect(gameboard.areAllShipsSunk()).toBe(true);
});

test("checkAnyAxisOutOfGrid method to check if coordinates are in grid", () => {
  expect(() => gameboard.checkAnyAxisOutOfGrid([10, 3])).toThrow(Error);
  expect(() => gameboard.checkAnyAxisOutOfGrid([-1, 3])).toThrow(
    "Coordinates is Out of grid size"
  );
});

test("checkAnyAxisOutOfGrid on placeShip gameboard method", () => {
  expect(() =>
    gameboard.placeShip(Ship(2), [
      [3, 4],
      [4, 25],
    ])
  ).toThrow("Coordinates is Out of grid size");
});

test("checkAnyAxisOutOfGrid on hasShipAt gameboard method", () => {
  expect(() => gameboard.hasShipAt([4, 25])).toThrow(
    "Coordinates is Out of grid size"
  );
});

test("checkAnyAxisOutOfGrid on receiveAttack gameboard method", () => {
  expect(() => gameboard.receiveAttack([4, 54])).toThrow(
    "Coordinates is Out of grid size"
  );
});

test("Remove more than 1 attack on same coordinate", () => {
  gameboard.placeShip(ship1, coordinate[0]);

  gameboard.receiveAttack(coordinate[0][0]);
  gameboard.receiveAttack([4, 4]);

  expect(gameboard.receiveAttack(coordinate[0][0])).toBe(
    "Attack again! already attacked grid"
  );
  expect(gameboard.receiveAttack([4, 4])).toBe(
    "Attack again! already attacked grid"
  );
});

test("gameboard resetBoard method to reset board", () => {
  gameboard.placeShip(ship1, coordinate[0]);

  gameboard.resetBoard();

  gameboard.board.forEach((row, rowIndex) => {
    row.forEach((grid, columnIndex) => {
      expect(grid).toBe(null);
    });
  });
});
