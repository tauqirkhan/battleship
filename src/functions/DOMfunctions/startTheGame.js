import { renderBoardDOM } from "./renderBoard";
import { playOnBoard1, playOnBoard2 } from "./playOnDOM";
import { Players } from "../player";
import { placeRandomShipsOn } from "../placerRandomShipsOn";

export const startTheGame = ({
  player1Name = "Goku",
  player2Name = "Vegeta",
  isPlayer2Computer,
  randomShipPlacement = true,
} = {}) => {
  const gameStatusDiv = document.querySelector(".gameStatus");
  const player1BoardDiv = document.querySelector(".player1Board");
  const player2BoardDiv = document.querySelector(".player2Board");

  const players = Players(player1Name, player2Name);
  const player1Obj = players.player1;
  const player2Obj = players.player2;

  const turn = {
    player1: "player1",
    player2: "player2",
  };

  if (randomShipPlacement) {
    placeRandomShipsOn(player1Obj);
    placeRandomShipsOn(player2Obj);
  }

  const statusObj = {
    currentChance: turn.player1,
    someoneWon: false,
    isComputerPlaying: isPlayer2Computer,
  };

  player1BoardDiv.addEventListener("mousedown", (e) =>
    playOnBoard1({
      e,
      turn,
      statusObj,
      player1Obj,
      player2Obj,
      player1BoardDiv,
      player2BoardDiv,
      gameStatusDiv,
    })
  );

  player2BoardDiv.addEventListener("mousedown", (e) => {
    playOnBoard2({
      e,
      turn,
      statusObj,
      player1Obj,
      player2Obj,
      player2BoardDiv,
      gameStatusDiv,
    });
  });

  renderBoardDOM(player1BoardDiv, player1Obj.board);
  renderBoardDOM(player2BoardDiv, player2Obj.board);
};
