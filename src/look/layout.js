import { createCells } from "../logic/cells";
import { changeTheme } from "../logic/change_theme";
import { createTheme } from "./theme";
import { createBody } from "./body";

export function createLayout() {
  const minesweeperWrapper = document.createElement("div");
  minesweeperWrapper.classList.add("minesweeper_wrapper");
  createBody().append(minesweeperWrapper);

  const minesweeperHeader = document.createElement("div");
  minesweeperHeader.classList.add("minesweeper_header");
  minesweeperWrapper.append(minesweeperHeader);

  const minesweeperTimer = document.createElement("div");
  minesweeperTimer.classList.add("minesweeper_timer");
  minesweeperHeader.append(minesweeperTimer);
  minesweeperTimer.textContent = "time";

  const minesweeperFlagsHolder = document.createElement("div");
  minesweeperFlagsHolder.classList.add("minesweeper_flags_holder");
  minesweeperHeader.append(minesweeperFlagsHolder);
  minesweeperFlagsHolder.textContent = "flags";

  const minesweeperFlagsPics = document.createElement('span');
  minesweeperFlagsPics.classList.add('minesweeper_flags_pics');
  minesweeperFlagsHolder.append(minesweeperFlagsPics);

  const minesweeperFlagsAvailable = document.createElement("span");
  minesweeperFlagsAvailable.classList.add("minesweeper_flags_available");
  minesweeperFlagsHolder.append(minesweeperFlagsAvailable);

  const minesweeperClicksCounter = document.createElement("div");
  minesweeperClicksCounter.classList.add("minesweeper_clicks_counter");
  minesweeperHeader.append(minesweeperClicksCounter);
  minesweeperClicksCounter.textContent = "clicks";

  const minesweeperMines = document.createElement('div');
  minesweeperMines.classList.add('minesweeper_mines');
  minesweeperHeader.append(minesweeperMines);
  minesweeperMines.textContent = 'mines';

  minesweeperWrapper.append(createCells());

  const minesweeperFooter = document.createElement("div");
  minesweeperFooter.classList.add("minesweeper_footer");
  minesweeperWrapper.append(minesweeperFooter);

  const minesweeperSize = document.createElement('div');
  minesweeperSize.classList.add('minesweeper_size');
  minesweeperFooter.append(minesweeperSize);

  const minesweeperSmall = document.createElement('span');
  minesweeperSmall.classList.add('minesweeper_small');
  minesweeperSize.append(minesweeperSmall);
  minesweeperSmall.textContent = '10x10';

  const minesweeperMedium = document.createElement('span');
  minesweeperMedium.classList.add('minesweeper_medium');
  minesweeperSize.append(minesweeperMedium);
  minesweeperMedium.textContent = '15x15';

  const minesweeperLarge = document.createElement('span');
  minesweeperLarge.classList.add('minesweeper_large');
  minesweeperSize.append(minesweeperLarge);
  minesweeperLarge.textContent = '20x20';

  const minesweeperDangerSign = document.createElement("div");
  minesweeperDangerSign.classList.add("minesweeper_danger_sign");
  minesweeperFooter.append(minesweeperDangerSign);

  const minesweeperDangerText = document.createElement("span");
  minesweeperDangerText.classList.add("minesweeper_danger_text");
  minesweeperDangerSign.append(minesweeperDangerText);
  minesweeperDangerText.textContent = "danger";

  const minesweeperDangerTiger = document.createElement("span");
  minesweeperDangerTiger.classList.add("minesweeper_danger_tiger");
  minesweeperFooter.append(minesweeperDangerTiger);

  minesweeperFooter.append(createTheme());

  changeTheme();

  // new Promise((resolve, reject) => {
  //   resolve(minesweeperFooter.append(createTheme()));
  //   reject(new Error('no theme found'));
  // }).then(changeTheme());
}
