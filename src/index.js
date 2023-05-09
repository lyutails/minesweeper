import "./style.scss";

const minesweeperBody = document.body;
minesweeperBody.classList.add("minesweeper_body");

const minesweeperWrapper = document.createElement("div");
minesweeperWrapper.classList.add("minesweeper_wrapper");
minesweeperBody.append(minesweeperWrapper);

const minesweeperHeader = document.createElement('div');
minesweeperHeader.classList.add('minesweeper_header');
minesweeperWrapper.append(minesweeperHeader);

const minesweeperField = document.createElement("div");
minesweeperField.classList.add("minesweeper_field");
minesweeperWrapper.append(minesweeperField);

const minesweeperCellsNumber = 100;

function createCells() {
  for (let i = 0; i < minesweeperCellsNumber; i++) {
    const minesweeperCell = document.createElement("span");
    minesweeperCell.classList.add("minesweeper_cell");
    minesweeperField.append(minesweeperCell);
  }
}

createCells();
