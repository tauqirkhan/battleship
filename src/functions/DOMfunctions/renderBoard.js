import { gridValue } from "../utils";

export const renderBoardDOM = (parentEl, board) => {
  parentEl.innerHTML = "";
  board.forEach((row, rowIndex) => {
    row.forEach((grid, columnIndex) => {
      const gridBtn = document.createElement("button");
      gridBtn.classList.add("gridBtn");

      gridBtn.dataset.row = rowIndex;
      gridBtn.dataset.column = columnIndex;

      let value = gridValue(grid);

      gridBtn.textContent = value;

      parentEl.appendChild(gridBtn);
    });
  });
  console.log(board);
};
