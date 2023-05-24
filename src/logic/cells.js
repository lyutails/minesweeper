import { getFirstClick } from "./first_click";

export function createCells() {
  let isGame = false;
  const minesweeperField = document.createElement("div");
  minesweeperField.classList.add("minesweeper_field");
  minesweeperField.setAttribute("id", "field_id");
  minesweeperField.textContent = "click me to start";
  let isGameOver = false;
  let isWin = false;
  let isFirstClick = false;
  const minesweeperCellsNumber = 10;
  const firstLaunchMinesNumber = 10;
  const mines = [];
  let j = 0;

  getFirstClick(
    minesweeperField,
    minesweeperCellsNumber,
    firstLaunchMinesNumber,
    mines,
    isGame,
    isGameOver,
    isWin
  );

  return minesweeperField;
}
