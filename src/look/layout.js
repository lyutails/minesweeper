import { createCells } from "../logic/cells";
import { createTheme } from "./theme";
import { createBody } from "./body";
import { fieldSize } from "../logic/field_size";
import { pickSize } from "./size";
import { createFlags } from "./flags";
import { tigerClicks } from "../logic/tiger_clicks_anim";
import { startTimer } from "../logic/set_time";

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

  const minesweeperTimeTitle = document.createElement('div');
  minesweeperTimeTitle.classList.add('minesweeper_time_title');
  minesweeperTimer.append(minesweeperTimeTitle);

  const minesweeperTimeName = document.createElement('p');
  minesweeperTimeName.classList.add('minesweeper_time_name');
  minesweeperTimeTitle.append(minesweeperTimeName);
  minesweeperTimeName.textContent = "time";

  const minesweeperTimeEyes = document.createElement('span');
  minesweeperTimeEyes.classList.add('minesweeper_time_eyes');
  minesweeperTimeTitle.append(minesweeperTimeEyes);

  const minesweeperTime = document.createElement("div");
  minesweeperTime.classList.add("minesweeper_time");
  minesweeperTimer.append(minesweeperTime);
  minesweeperTime.textContent = "0:0";

  startTimer(minesweeperTime);

  minesweeperHeader.append(createFlags());

  const minesweeperMines = document.createElement("div");
  minesweeperMines.classList.add("minesweeper_mines");
  minesweeperHeader.append(minesweeperMines);
  minesweeperMines.textContent = "mines";

  const minesweeperMinesCounter = document.createElement("div");
  minesweeperMinesCounter.classList.add("minesweeper_mines_counter");
  minesweeperMines.append(minesweeperMinesCounter);
  minesweeperMinesCounter.textContent = "10";

  const minesweeperClicks = document.createElement("div");
  minesweeperClicks.classList.add("minesweeper_clicks");
  minesweeperHeader.append(minesweeperClicks);
  minesweeperClicks.textContent = "clicks";

  const minesweeperClicksCounter = document.createElement("div");
  minesweeperClicksCounter.classList.add("minesweeper_clicks_counter");
  minesweeperClicks.append(minesweeperClicksCounter);
  minesweeperClicksCounter.textContent = "0";

  minesweeperWrapper.append(createCells());

  const minesweeperFooter = document.createElement("div");
  minesweeperFooter.classList.add("minesweeper_footer");
  minesweeperWrapper.append(minesweeperFooter);

  minesweeperFooter.append(pickSize());

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

  tigerClicks(minesweeperDangerTiger);

  minesweeperFooter.append(createTheme());

  const minesweeperInstruction = document.createElement("div");
  minesweeperInstruction.classList.add("minesweeper_instruction");
  minesweeperWrapper.append(minesweeperInstruction);
  minesweeperInstruction.textContent = "place / remove flags with rmb or drag&drop";

  const minesweeperCopyright = document.createElement('div');
  minesweeperCopyright.classList.add("minesweeper_copyright");
  minesweeperWrapper.append(minesweeperCopyright);

  const minesweeperSchool = document.createElement("a");
  minesweeperSchool.classList.add("minesweeper_school");
  minesweeperCopyright.append(minesweeperSchool);
  minesweeperSchool.textContent = "RSSchool";
  minesweeperSchool.setAttribute("href", "https://rs.school/");

  const minesweeperAuthor = document.createElement("a");
  minesweeperAuthor.classList.add("minesweeper_author");
  minesweeperCopyright.append(minesweeperAuthor);
  minesweeperAuthor.textContent = "2023 @lyutails";
  minesweeperAuthor.setAttribute("href", "https://github.com/lyutails");
}
