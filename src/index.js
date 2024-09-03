import "./style.css";
import { startTheGame } from "./functions/DOMfunctions/startTheGame";
import { Players } from "./functions/player";

const player1BoardDiv = document.querySelector(".player1Board");
const player2BoardDiv = document.querySelector(".player2Board");
const gameStatusDiv = document.querySelector(".gameStatus > p");

const players = Players("goku", "vegeta");

const game = startTheGame({
  player1Obj: players.player1,
  player2Obj: players.player2,
  randomShipPlacement: true,
  isPlayer2Computer: true,
  player1BoardDiv,
  player2BoardDiv,
  gameStatusDiv,
});

const restartBtn = document.querySelector(".restart");

restartBtn.addEventListener("click", game.resetGame);
