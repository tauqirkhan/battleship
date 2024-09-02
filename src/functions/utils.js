export const includesAnyCoordinates = (coordinatesArray, givenCoordinate) => {
  return coordinatesArray.some(
    (coordinateInArr) =>
      coordinateInArr.length === givenCoordinate.length &&
      coordinateInArr.every((value, index) => value === givenCoordinate[index])
  );
};

export const gridValue = (grid) => {
  let gridValue = "";
  if (grid === "hit attack") {
    gridValue = "X";
  }
  if (grid === "empty attack") {
    gridValue = ".";
  }
  return gridValue;
};

export const generateRandomNumber = (max = 10, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getAllCoordinatesFromBoard = (board) => {
  const allCoordinates = [];

  board.forEach((row, rowIndex) => {
    row.forEach((grid, columnIndex) => {
      // null and object are both typeof 'object'
      if (typeof grid !== "object") {
        allCoordinates.push([rowIndex, columnIndex]);
      }
    });
  });

  return allCoordinates;
};

export const getRestShipCoordinates = (
  initialCoordinate,
  length,
  direction = "y"
) => {
  const coordinatesArray = [];

  let [row, column] = initialCoordinate;
  for (let i = 0; i < length; i++) {
    if (row >= 0 && row < 10 && column >= 0 && column < 10) {
      coordinatesArray.push([row, column]);
      if (direction === "x") column++;
      else row++;
    } else return false;
  }
  return coordinatesArray;
};

export const getRandomShipCoordinates = (length, axis = "y") => {
  if (length > 10) throw new Error("length must not be greater than grid size");
  const row = generateRandomNumber(10);
  const column = generateRandomNumber(10);

  let shipCoordinates = getRestShipCoordinates([row, column], length, axis);
  if (shipCoordinates !== false) return shipCoordinates;

  return getRandomShipCoordinates(length, axis);
};

export function getRandomLegalShipCoordinates(
  allShipsCoordinates,
  shipLength,
  axis,
  shipCoordinates = getRandomShipCoordinates(shipLength, axis)
) {
  shipCoordinates = verifyOrGetLegalCoordinates(
    shipCoordinates,
    allShipsCoordinates
  );
  return shipCoordinates;
}

export function verifyOrGetLegalCoordinates(
  shipCoordinates,
  allShipsCoordinates
) {
  for (let shipCoordinate of shipCoordinates) {
    const isCollided = includesAnyCoordinates(
      allShipsCoordinates,
      shipCoordinate
    );
    if (isCollided)
      return getLegalCoordinates(shipCoordinates.length, allShipsCoordinates);
  }
  return shipCoordinates;
}

export function getLegalCoordinates(length, allShipsCoordinates) {
  const newRandomCoordinates = getRandomShipCoordinates(length);

  const hasCollision = newRandomCoordinates.some((coordinate) =>
    includesAnyCoordinates(allShipsCoordinates, coordinate)
  );

  if (!hasCollision) return newRandomCoordinates;

  return getLegalCoordinates(length, allShipsCoordinates);
}

export const Attack = (attackOutput) => {
  const attackType = {
    isDuplicate: false,
    isHit: false,
  };

  if (attackOutput === "Attack again! already attacked grid") {
    attackType.isDuplicate = true;
  } else if (attackOutput === "hit attack") attackType.isHit = true;

  return {
    isDuplicate: attackType.isDuplicate,
    isHit: attackType.isHit,
  };
};
