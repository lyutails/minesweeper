import { minesData } from "../data/data_mines";
import { loseModal } from "../look/lose_modal";
import { createOverlay } from "../look/overlay";
import { addMinesPics } from "./add_mines_pics";
import { shuffleMines } from "./shuffle_mines";

export function createCells() {
  const minesweeperField = document.createElement("div");
  minesweeperField.classList.add("minesweeper_field");

  const minesweeperCellsNumber = 10;
  const firstLaunchMinesNumber = 10;
  let j = 0;
  const withoutMines = Array(
    minesweeperCellsNumber * minesweeperCellsNumber - firstLaunchMinesNumber
  ).fill("empty");
  const minesArray = Array(firstLaunchMinesNumber).fill("minesweeper_new_mine");
  const minesPics = shuffleMines(minesData).slice(0, firstLaunchMinesNumber);
  const emptyPlusMinesArray = withoutMines.concat(minesArray);
  const shuffledArray = emptyPlusMinesArray.sort(() => Math.random() - 0.5);
  console.log(shuffledArray);

  let cellsArray = new Array();
  for (let i = 0; i < minesweeperCellsNumber * minesweeperCellsNumber; i++) {
    const minesweeperCell = document.createElement("div");
    minesweeperCell.setAttribute("id", i);
    minesweeperCell.classList.add("minesweeper_cell");
    minesweeperCell.classList.add(shuffledArray[i]);
    if (shuffledArray[i] === "minesweeper_new_mine") {
      minesweeperCell.style.backgroundImage = `url(${minesPics[j]})`;
      j += 1;
    }
    minesweeperField.append(minesweeperCell);
    cellsArray.push(minesweeperCell);
  }

  cellsArray.forEach((element) => {
    element.addEventListener("click", () => {
      element.style.backgroundColor = "transparent";
    });
  });

  return minesweeperField;
}
