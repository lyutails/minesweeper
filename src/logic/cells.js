import { minesData } from "../data/data_mines";
import { loseModal } from "../look/lose_modal";
import { createOverlay } from "../look/overlay";
import { addMinesPics } from "./add_mines_pics";
import { shuffleMines } from "./shuffle_mines";

export function createCells() {
  const minesweeperField = document.createElement("div");
  minesweeperField.classList.add("minesweeper_field");
  let isGameOver = false;
  const minesweeperCellsNumber = 10;
  const firstLaunchMinesNumber = 10;
  const mines = [];
  let j = 0;
  const withoutMines = Array(
    minesweeperCellsNumber * minesweeperCellsNumber - firstLaunchMinesNumber
  ).fill("minesweeper_empty_cell");
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
      // minesweeperCell.style.backgroundImage = `url(${minesPics[j]})`;
      mines.push(minesweeperCell);
      j += 1;
    }
    minesweeperField.append(minesweeperCell);
    cellsArray.push(minesweeperCell);

    minesweeperCell.addEventListener("click", function (e) {
      click(minesweeperCell);
    });
  }

  // cellsArray.forEach((element) => {
  //   element.addEventListener("click", () => {
  //     element.style.backgroundColor = "transparent";
  //   });
  // });

  for (let i = 0; i < cellsArray.length; i++) {
    let total = 0;
    const isLeftSide = i % minesweeperCellsNumber === 0;
    const isRightSide =
      i % minesweeperCellsNumber === minesweeperCellsNumber - 1;

    if (cellsArray[i].classList.contains("minesweeper_empty_cell")) {
      if (
        i > 0 &&
        !isLeftSide &&
        cellsArray[i - 1].classList.contains("minesweeper_new_mine")
      )
        total++;
      if (
        i > 9 &&
        !isRightSide &&
        cellsArray[i + 1 - minesweeperCellsNumber].classList.contains(
          "minesweeper_new_mine"
        )
      )
        total++;
      if (
        i > 10 &&
        cellsArray[i - minesweeperCellsNumber].classList.contains(
          "minesweeper_new_mine"
        )
      )
        total++;
      if (
        i > 11 &&
        !isLeftSide &&
        cellsArray[i - 1 - minesweeperCellsNumber].classList.contains(
          "minesweeper_new_mine"
        )
      )
        total++;
      if (
        i < 98 &&
        !isRightSide &&
        cellsArray[i + 1].classList.contains("minesweeper_new_mine")
      )
        total++;
      if (
        i < 90 &&
        !isLeftSide &&
        cellsArray[i - 1 + minesweeperCellsNumber].classList.contains(
          "minesweeper_new_mine"
        )
      )
        total++;
      if (
        i < 88 &&
        !isRightSide &&
        cellsArray[i + 1 + minesweeperCellsNumber].classList.contains(
          "minesweeper_new_mine"
        )
      )
        total++;
      if (
        i < 89 &&
        cellsArray[i + minesweeperCellsNumber].classList.contains(
          "minesweeper_new_mine"
        )
      )
        total++;
      cellsArray[i].setAttribute("data", total);
    }
  }

  function click(minesweeperCell) {
    let currentId = minesweeperCell.id;
    if (isGameOver) return;
    if (
      minesweeperCell.classList.contains("minesweeper_checked") ||
      minesweeperCell.classList.contains("minesweeper_flagged")
    )
      return;
    if (minesweeperCell.classList.contains("minesweeper_new_mine")) {
      gameOver(minesweeperCell);
    } else {
      let total = minesweeperCell.getAttribute("data");
      if (total != 0) {
        minesweeperCell.classList.add("minesweeper_checked");
        minesweeperCell.textContent = total;
        return;
      }
      checkCell(minesweeperCell, currentId);
    }
    minesweeperCell.classList.add("minesweeper_checked");
  }

  function checkCell(minesweeperCell, currentId) {
    const isLeftSide = currentId % minesweeperCellsNumber === 0;
    const isRightSide =
      currentId % minesweeperCellsNumber === minesweeperCellsNumber - 1;

    setTimeout(() => {
      if (currentId > 0 && !isLeftSide) {
        const newId = cellsArray[parseInt(currentId) - 1].id;
        const newCell = document.getElementById(newId);
        click(newCell);
      }
      if (currentId > 9 && !isRightSide) {
        const newId =
          cellsArray[parseInt(currentId) + 1 - minesweeperCellsNumber].id;
        const newCell = document.getElementById(newId);
        click(newCell);
      }
      if (currentId > 10) {
        const newId =
          cellsArray[parseInt(currentId - minesweeperCellsNumber)].id;
        const newCell = document.getElementById(newId);
        click(newCell);
      }
      if (currentId > 11 && !isLeftSide) {
        const newId =
          cellsArray[parseInt(currentId) - 1 - minesweeperCellsNumber].id;
        const newCell = document.getElementById(newId);
        click(newCell);
      }
      if (currentId < 98 && !isRightSide) {
        const newId = cellsArray[parseInt(currentId) + 1].id;
        const newCell = document.getElementById(newId);
        click(newCell);
      }
      if (currentId < 90 && !isLeftSide) {
        const newId =
          cellsArray[parseInt(currentId) - 1 + minesweeperCellsNumber].id;
        const newCell = document.getElementById(newId);
        click(newCell);
      }
      if (currentId < 88 && !isRightSide) {
        const newId =
          cellsArray[parseInt(currentId) + 1 + minesweeperCellsNumber].id;
        const newCell = document.getElementById(newId);
        click(newCell);
      }
      if (currentId < 89) {
        const newId =
          cellsArray[parseInt(currentId) + minesweeperCellsNumber].id;
        const newCell = document.getElementById(newId);
        click(newCell);
      }
    }, 10);
  }

  mines.forEach((element) => {
    const body = document.querySelector(".minesweeper_body");
    element.addEventListener("click", () => {
      body.insertAdjacentElement("afterbegin", createOverlay());
      body.insertAdjacentElement("afterbegin", loseModal());
    });
  });

  function gameOver(minesweeperCell) {
    isGameOver = true;

    cellsArray.forEach(minesweeperCell => {
      if (minesweeperCell.classList.contains("minesweeper_new_mine")) {
        // minesweeperCell.innerHTML = '💣';
        // minesweeperCell.style.backgroundImage = `url(${minesPics[j]})`;

        mines.forEach((mine, j) => {
          mine.style.backgroundImage = `url(${minesPics[j]})`;
        })
      }
    });
  }

  return minesweeperField;
}
