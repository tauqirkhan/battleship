import { getRandomLegalShipCoordinates, getAdjacentCoordinates } from "./utils";

export const Randomise = () => {
  const CARRIER_LEN = 5;
  const BATTLESHIP_LEN = 4;
  const CRUISER_LEN = 3;
  const SUBMARINE_LEN = 2;
  const DESTROYER_LEN = 1;

  const allShipsCoordinates = [];
  const allDodgeCoordinates = [];

  let carrierAxis = getRandomAxis();
  let battleshipAxis = getRandomAxis();
  let cruiserAxis = getRandomAxis();
  let submarineAxis = getRandomAxis();
  let destroyerAxis = getRandomAxis();

  const carrierCoordinates = getRandomLegalShipCoordinates(
    allDodgeCoordinates,
    CARRIER_LEN,
    carrierAxis
  );
  allShipsCoordinates.push(...carrierCoordinates);
  allDodgeCoordinates.push(...allShipsCoordinates);
  allDodgeCoordinates.push(
    ...getAdjacentCoordinates(carrierCoordinates, carrierAxis)
  );

  const battleshipCoordinates = getRandomLegalShipCoordinates(
    allDodgeCoordinates,
    BATTLESHIP_LEN,
    battleshipAxis
  );
  allShipsCoordinates.push(...battleshipCoordinates);
  allDodgeCoordinates.push(...allShipsCoordinates);
  allDodgeCoordinates.push(
    ...getAdjacentCoordinates(battleshipCoordinates, battleshipAxis)
  );

  const cruiserCoordinates = getRandomLegalShipCoordinates(
    allDodgeCoordinates,
    CRUISER_LEN,
    cruiserAxis
  );
  allShipsCoordinates.push(...cruiserCoordinates);
  allDodgeCoordinates.push(...allShipsCoordinates);
  allDodgeCoordinates.push(
    ...getAdjacentCoordinates(cruiserCoordinates, cruiserAxis)
  );

  const submarineCoordinates = getRandomLegalShipCoordinates(
    allDodgeCoordinates,
    SUBMARINE_LEN,
    submarineAxis
  );
  allShipsCoordinates.push(...submarineCoordinates);
  allDodgeCoordinates.push(...allShipsCoordinates);
  allDodgeCoordinates.push(
    ...getAdjacentCoordinates(submarineCoordinates, submarineAxis)
  );

  const destroyerCoordinates = getRandomLegalShipCoordinates(
    allDodgeCoordinates,
    DESTROYER_LEN,
    destroyerAxis
  );
  allShipsCoordinates.push(...destroyerCoordinates);
  allDodgeCoordinates.push(...allShipsCoordinates);
  allDodgeCoordinates.push(
    ...getAdjacentCoordinates(destroyerCoordinates, destroyerAxis)
  );

  function getRandomAxis() {
    return Math.random() < 0.5 ? "x" : "y";
  }

  return {
    allShipsCoordinates,
    allDodgeCoordinates,
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    destroyerCoordinates,
  };
};
