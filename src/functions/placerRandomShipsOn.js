import { Randomise } from "./randomise";
import { Ship } from "./ship";

export const placeRandomShipsOnPlayers = (player1Obj, player2Obj) => {
  placeRandomShipsOn(player1Obj);
  placeRandomShipsOn(player2Obj);
};

function placeRandomShipsOn(player) {
  const random = Randomise();

  placeShip(
    player,
    random.carrierCoordinates.length,
    random.carrierCoordinates
  );
  placeShip(
    player,
    random.battleshipCoordinates.length,
    random.battleshipCoordinates
  );
  placeShip(
    player,
    random.cruiserCoordinates.length,
    random.cruiserCoordinates
  );
  placeShip(
    player,
    random.submarineCoordinates.length,
    random.submarineCoordinates
  );
  placeShip(
    player,
    random.destroyerCoordinates.length,
    random.destroyerCoordinates
  );
}

function placeShip(player, length, coordinates) {
  const shipObj = Ship(length);
  player.placeShip(shipObj, coordinates);
}
