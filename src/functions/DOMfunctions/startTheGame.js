import { renderBoardDOM } from "./renderBoard";
import { playOnBoard1, playOnBoard2 } from "./playOnDOM";
import { placeRandomShipsOnPlayers } from "../placerRandomShipsOn";

export const startTheGame = ({
  player1Obj,
  player2Obj,
  isPlayer2Computer,
  randomShipPlacement = true,
  gameStatusDiv,
  player1BoardDiv,
  player2BoardDiv,
} = {}) => {
  const turn = {
    player1: "player1",
    player2: "player2",
  };

  const statusObj = {
    currentChance: turn.player1,
    someoneWon: false,
    isComputerPlaying: isPlayer2Computer,
  };

  player1BoardDiv.addEventListener("mousedown", handlePlayer1MouseDown);
  player2BoardDiv.addEventListener("mousedown", handlePlayer2MouseDown);

  if (randomShipPlacement) placeRandomShip();

  renderBoardDOM(player1BoardDiv, player1Obj.board);
  renderBoardDOM(player2BoardDiv, player2Obj.board);
  gameStatusDiv.textContent = `${player1Obj.name} move...`;

  const resetGame = () => {
    statusObj.currentChance = turn.player1;
    gameStatusDiv.textContent = `${player1Obj.name} move...`;
    statusObj.someoneWon = false;

    player1Obj.resetBoard();
    player2Obj.resetBoard();

    placeRandomShip();

    renderBoardDOM(player1BoardDiv, player1Obj.board);
    renderBoardDOM(player2BoardDiv, player2Obj.board);
  };

  function handlePlayer1MouseDown(e) {
    playOnBoard1({
      e,
      turn,
      statusObj,
      player1Obj,
      player2Obj,
      player1BoardDiv,
      player2BoardDiv,
      gameStatusDiv,
    });
  }

  function handlePlayer2MouseDown(e) {
    playOnBoard2({
      e,
      turn,
      statusObj,
      player1Obj,
      player2Obj,
      player2BoardDiv,
      gameStatusDiv,
    });
  }

  function placeRandomShip() {
    placeRandomShipsOnPlayers(player1Obj, player2Obj);
  }

  return {
    resetGame,
  };
};
