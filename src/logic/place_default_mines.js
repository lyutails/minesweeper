import { minesData } from "../data/data_mines";
import { shuffleMines } from "./shuffle_mines";

export function placeDefaultMines(cellsCoverArray) {
  const defaultMines = shuffleMines(minesData).slice(0, 10);
  for (let i = 0; i < defaultMines.length; i++) {
    const newMine = document.createElement("span");
    newMine.classList.add("new_mine");
    newMine.style.backgroundImage = `url(${defaultMines[i]})`;
    const appendTo =
      cellsCoverArray[Math.floor(Math.random() * cellsCoverArray.length)];
    if (!appendTo.contains(newMine)) {
      appendTo.append(newMine);
    } else {
      i = -1;
      continue;
    }
  }
}
