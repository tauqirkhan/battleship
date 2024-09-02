import { renderBoardDOM } from "./renderBoard";
import { computerPlay } from "../computerPlay";
import { getAllCoordinatesFromBoard } from "../utils";
import { Attack } from "../utils";

export const computerPlayOnDOM = ({
  turn,
  player2Obj,
  player1Obj,
  statusObj,
  gameStatusDiv,
  player2BoardDiv,
  allCoordinatesArray = getAllCoordinatesFromBoard(player2Obj.board),
  uniqueCoordinates = computerPlay(allCoordinatesArray),
  renderBoard2 = () => renderBoardDOM(player2BoardDiv, player2Obj.board),
} = {}) => {
  if (statusObj.currentChance === turn.player1) return;
  const attack = Attack(player2Obj.receiveAttack(uniqueCoordinates));

  if (player2Obj.areAllShipsSunk()) {
    statusObj.someoneWon = true;
    gameStatusDiv.textContent = `${player2Obj.name} won the game`;
    renderBoard2();
    return;
  }
  renderBoard2();
  if (!attack.isHit) {
    statusObj.currentChance = turn.player1;
    gameStatusDiv.textContent = `${player1Obj.name} move...`;
    return;
  }

  setTimeout(
    () =>
      computerPlayOnDOM({
        turn,
        player2Obj,
        player1Obj,
        statusObj,
        gameStatusDiv,
        player2BoardDiv,
      }),
    1000
  );
};

export const playOnBoard1 = ({
  e,
  turn,
  statusObj,
  player1Obj,
  player2Obj,
  player1BoardDiv,
  player2BoardDiv,
  gameStatusDiv,
  renderBoard1 = () => renderBoardDOM(player1BoardDiv, player1Obj.board),
  renderBoard2 = () => renderBoardDOM(player2BoardDiv, player2Obj.board),
  playComputer = () =>
    computerPlayOnDOM({
      turn,
      player2Obj,
      player1Obj,
      statusObj,
      gameStatusDiv,
      player2BoardDiv,
      renderBoard2,
    }),
} = {}) => {
  if (statusObj.someoneWon) return;
  if (statusObj.currentChance === turn.player2) return;

  const row = e.target.dataset.row;
  const column = e.target.dataset.column;

  const attack = Attack(player1Obj.receiveAttack([row, column]));
  if (attack.isDuplicate) return;

  const areAllShipsSunk = player1Obj.areAllShipsSunk();

  if (areAllShipsSunk) {
    statusObj.someoneWon = true;
    gameStatusDiv.textContent = `${player1Obj.name} won the game`;
    renderBoard1();
    return;
  }

  renderBoard1();

  if (!attack.isHit) {
    statusObj.currentChance = turn.player2;
    gameStatusDiv.textContent = `${player2Obj.name} move...`;
    if (statusObj.isComputerPlaying) setTimeout(playComputer, 1000);
  }
};

export const playOnBoard2 = ({
  e,
  turn,
  statusObj,
  player1Obj,
  player2Obj,
  player2BoardDiv,
  gameStatusDiv,
  renderBoard2 = () => renderBoardDOM(player2BoardDiv, player2Obj.board),
} = {}) => {
  if (statusObj.someoneWon) return;
  if (statusObj.currentChance === turn.player1) return;
  if (statusObj.isComputerPlaying) return;

  const row = e.target.dataset.row;
  const column = e.target.dataset.column;

  const attack = Attack(player2Obj.receiveAttack([row, column]));
  if (attack.isDuplicate) return;

  if (player2Obj.areAllShipsSunk()) {
    statusObj.someoneWon = true;
    gameStatusDiv.textContent = `${player2Obj.name} won the game`;
    renderBoard2();
    return;
  }

  renderBoard2();
  if (!attack.isHit) {
    statusObj.currentChance = turn.player1;
    gameStatusDiv.textContent = `${player1Obj.name} move...`;
  }
};
