export function Ship(length = 1) {
  let _numOfHit = 0;
  const hit = () => (_numOfHit += 1);
  const isSunk = () => _numOfHit >= length;
  const getNumOfHit = () => _numOfHit;
  return {
    length,
    hit,
    isSunk,
    getNumOfHit,
  };
}
