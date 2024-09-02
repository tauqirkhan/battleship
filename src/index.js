import "./style.css";
import { startTheGame } from "./functions/DOMfunctions/startTheGame";

startTheGame({
  player2Name: "player2",
  player1Name: "Player1",
  randomShipPlacement: true,
  isPlayer2Computer: true,
});
