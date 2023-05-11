import { createCells } from "../logic/cells";

export function createLayout() {
  const minesweeperBody = document.body;
  minesweeperBody.classList.add("minesweeper_body");

  const minesweeperWrapper = document.createElement("div");
  minesweeperWrapper.classList.add("minesweeper_wrapper");
  minesweeperBody.append(minesweeperWrapper);

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

  const minesweeperFlagsAvailable = document.createElement("div");
  minesweeperFlagsAvailable.classList.add("minesweeper_flags_available");
  minesweeperHeader.append(minesweeperFlagsAvailable);
  minesweeperFlagsAvailable.textContent = "available";

  const minesweeperClicksCounter = document.createElement("div");
  minesweeperClicksCounter.classList.add("minesweeper_clicks_counter");
  minesweeperHeader.append(minesweeperClicksCounter);
  minesweeperClicksCounter.textContent = "clicks";

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

  const minesweeperTheme = document.createElement('div');
  minesweeperTheme.classList.add('minesweeper_theme');
  minesweeperFooter.append(minesweeperTheme);
  minesweeperTheme.textContent = 'theme';
}
