export function createCells() {
  const minesweeperField = document.createElement("div");
  minesweeperField.classList.add("minesweeper_field");

  const minesweeperCellsNumber = 100;
  let cellsArray = new Array();
  for (let i = 0; i < minesweeperCellsNumber; i++) {
    const minesweeperCell = document.createElement("span");
    minesweeperCell.classList.add("minesweeper_cell");
    minesweeperField.append(minesweeperCell);
    cellsArray.push(minesweeperCell);
  }

  return minesweeperField;
}
