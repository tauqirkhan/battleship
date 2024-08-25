import { Player } from "../player";

test("there are two players with thier own gameBoard", () => {
  const player = Player("real player", "computer");

  expect(player.player1.name).toBe("real player");
  expect(player.player2.name).toBe("computer");
});
