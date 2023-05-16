import { changeTheme } from "./change_theme";
import { placeDefaultMines } from "./place_default_mines";

export function createCells() {
  const minesweeperField = document.createElement("div");
  minesweeperField.classList.add("minesweeper_field");

  const minesweeperCellsNumber = 100;
  let cellsArray = new Array();
  let cellsCoverArray = [];
  for (let i = 0; i < minesweeperCellsNumber; i++) {
    const minesweeperCell = document.createElement("span");
    minesweeperCell.classList.add("minesweeper_cell");
    minesweeperField.append(minesweeperCell);
    cellsArray.push(minesweeperCell);
    const minesweeperCellCover = document.createElement("span");
    minesweeperCellCover.classList.add("minesweeper_cell_cover");
    cellsArray[i].append(minesweeperCellCover);
    cellsCoverArray.push(minesweeperCellCover);
  }

  cellsCoverArray.forEach(element => {
    element.addEventListener('click', () => {
      element.style.backgroundColor = 'transparent';
    })
  })

  placeDefaultMines(cellsCoverArray);

  return minesweeperField;
}
