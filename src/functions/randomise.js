import { getRandomLegalShipCoordinates } from "./utils";

export const Randomise = () => {
  const CARRIER_LEN = 5;
  const BATTLESHIP_LEN = 4;
  const CRUISER_LEN = 3;
  const SUBMARINE_LEN = 2;
  const DESTROYER_LEN = 1;

  let allShipsCoordinates = [];

  const carrierCoordinates = getRandomLegalShipCoordinates(
    allShipsCoordinates,
    CARRIER_LEN,
    "y"
  );
  allShipsCoordinates = [...allShipsCoordinates, ...carrierCoordinates];

  const battleshipCoordinates = getRandomLegalShipCoordinates(
    allShipsCoordinates,
    BATTLESHIP_LEN,
    "x"
  );
  allShipsCoordinates = [...allShipsCoordinates, ...battleshipCoordinates];

  const cruiserCoordinates = getRandomLegalShipCoordinates(
    allShipsCoordinates,
    CRUISER_LEN,
    "y"
  );
  allShipsCoordinates = [...allShipsCoordinates, ...cruiserCoordinates];

  const submarineCoordinates = getRandomLegalShipCoordinates(
    allShipsCoordinates,
    SUBMARINE_LEN,
    "y"
  );
  allShipsCoordinates = [...allShipsCoordinates, ...submarineCoordinates];

  const destroyerCoordinates = getRandomLegalShipCoordinates(
    allShipsCoordinates,
    DESTROYER_LEN,
    "x"
  );
  allShipsCoordinates = [...allShipsCoordinates, ...destroyerCoordinates];

  return {
    allShipsCoordinates,
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    destroyerCoordinates,
  };
};
