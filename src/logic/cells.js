import { changeTheme } from "./change_theme";
import { placeDefaultMines } from "./place_default_mines";

export function createCells() {
  const minesweeperField = document.createElement("div");
  minesweeperField.classList.add("minesweeper_field");

  const minesweeperCellsNumber = 10;
  let cellsArray = new Array();
  let cellsCoverArray = [];
  for (let i = 0; i < minesweeperCellsNumber*minesweeperCellsNumber; i++) {
    const minesweeperCell = document.createElement("span");
    minesweeperCell.setAttribute('id', i);
    minesweeperCell.classList.add("minesweeper_cell");
    minesweeperField.append(minesweeperCell);
    cellsArray.push(minesweeperCell);
    // const minesweeperCellCover = document.createElement("span");
    // minesweeperCellCover.classList.add("minesweeper_cell_cover");
    // cellsArray[i].append(minesweeperCellCover);
    // cellsCoverArray.push(minesweeperCellCover);
    // minesweeperCellCover.setAttribute('id', i);
  }

  cellsCoverArray.forEach(element => {
    element.addEventListener('click', () => {
      element.style.backgroundColor = 'transparent';
    })
  })

  placeDefaultMines(cellsArray);

// add numbers

// for (let i = 0; i < cellsCoverArray.length; i++) {
//   let width = 10;
//   let total = 0;
//   const isLeftEdge = (i % width === 0);
//   const isRightEdge = (i % width === width - 1);

//   if (cellsCoverArray[i].children.classList.contains('new_mine')) {
//     if (i > 0 && !isLeftEdge && cellsCoverArray[i - 1].classList.contains('new_mine')) total++;
//     if (i > 9 && !isRightEdge && cellsCoverArray[i + 1 - width].classList.contains('new_mine')) total++;
//     cellsCoverArray[i].setAttribute('data', total);
//     console.log(cellsCoverArray[i]);
//   }
// }

  return minesweeperField;
}

