import { Gameboard } from "./gameboard";

export const Player = (
  player1Name = "player1",
  player2Name = "computer",
  player1 = Gameboard(),
  player2 = Gameboard()
) => {
  player1.name = player1Name;
  player2.name = player2Name;

  console.log(player1);
  console.log(player2);

  return {
    player1,
    player2,
  };
};
