import { Gameboard } from "./gameboard";

export const Players = (
  player1Name = "human",
  player2Name = "computer",
  player1 = Gameboard(),
  player2 = Gameboard()
) => {
  player1.name = player1Name;
  player2.name = player2Name;

  return {
    player1,
    player2,
  };
};
