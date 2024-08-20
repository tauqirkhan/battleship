export function Ship(length = 1) {
  let numOfHit = 0;
  const hit = () => (numOfHit += 1);
  const isSunk = () => numOfHit >= length;
  return {
    hit,
    isSunk,
  };
}
