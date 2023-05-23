import { defaultSize } from "../logic/default_game";
import { fieldSize } from "../logic/field_size";

export function pickSize() {
  const minesweeperSize = document.createElement("div");
  minesweeperSize.classList.add("minesweeper_size");

  const minesweeperDefault = document.createElement('span');
  minesweeperDefault.classList.add('minesweeper_default');
  minesweeperSize.append(minesweeperDefault);
  minesweeperDefault.textContent = 'default';

  const minesweeperSmall = document.createElement("span");
  minesweeperSmall.classList.add("minesweeper_small");
  minesweeperSize.append(minesweeperSmall);
  minesweeperSmall.textContent = "10x10";

  const minesweeperMedium = document.createElement("span");
  minesweeperMedium.classList.add("minesweeper_medium");
  minesweeperSize.append(minesweeperMedium);
  minesweeperMedium.textContent = "15x15";

  const minesweeperLarge = document.createElement("span");
  minesweeperLarge.classList.add("minesweeper_large");
  minesweeperSize.append(minesweeperLarge);
  minesweeperLarge.textContent = "20x20";

  let sizeArray = [minesweeperSmall, minesweeperMedium, minesweeperLarge];

  defaultSize(minesweeperDefault);

  fieldSize(sizeArray);

  return minesweeperSize;
}