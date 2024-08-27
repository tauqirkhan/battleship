import { renderBoardDOM } from "./renderBoard";

export const eventListeners = (
  gameStatusDiv,
  player1BoardDiv,
  player2BoardDiv,
  player1,
  player2
) => {
  let _currentPlayerChance = "player1";

  player1BoardDiv.addEventListener("click", playMove1);
  player2BoardDiv.addEventListener("click", playMove2);

  function playMove1(e) {
    const row = e.target.dataset.row;
    const column = e.target.dataset.column;

    if (_currentPlayerChance === "player2") return;

    const attack = player1.receiveAttack([row, column]);
    if (attack === "Attack again! already attacked grid") return;

    renderBoardDOM(player1BoardDiv, player1.board);
    _currentPlayerChance = "player2";
    gameStatusDiv.textContent = `${player2.name} move...`;
  }

  function playMove2(e) {
    const row = e.target.dataset.row;
    const column = e.target.dataset.column;

    if (_currentPlayerChance === "player1") return;

    const attack = player2.receiveAttack([row, column]);
    if (attack === "Attack again! already attacked grid") return;

    renderBoardDOM(player2BoardDiv, player2.board);
    _currentPlayerChance = "player1";
    gameStatusDiv.textContent = `${player1.name} move...`;
  }
};
