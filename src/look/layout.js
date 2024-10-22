import { flagsData } from "../data/data_flags";
import { createFlags } from "./flags";
import { getFirstClick } from "../logic/first_click";
import { shuffleFlags } from "../logic/shuffle_flags";
import { createBody } from "./body";
import { changeButtonsTheme } from "../logic/buttons_theme";
import { createTheme } from "./theme";

export function createCells() {
  let isGame = false;
  let isGameOver = false;
  let isWin = false;
  const minesweeperCellsNumber = 10;
  const firstLaunchMinesNumber = 10;
  const mines = [];
  let j = 0;

  const minesweeperField = document.createElement("div");
  minesweeperField.classList.add("minesweeper_field");
  minesweeperField.setAttribute("id", "field_id");
  minesweeperField.textContent = "click me to start";

  const firstLaunchFlagsNumber = 10;
  const flagsPicsArray = shuffleFlags(flagsData).slice(
    0,
    firstLaunchFlagsNumber
  );

  function createLayout() {
    const minesweeperWrapper = document.createElement("div");
    minesweeperWrapper.classList.add("minesweeper_wrapper");
    createBody().append(minesweeperWrapper);

    const minesweeperHeader = document.createElement("div");
    minesweeperHeader.classList.add("minesweeper_header");
    minesweeperWrapper.append(minesweeperHeader);

    const minesweeperTimer = document.createElement("div");
    minesweeperTimer.classList.add("minesweeper_timer");
    minesweeperHeader.append(minesweeperTimer);

    const minesweeperTimeTitle = document.createElement("div");
    minesweeperTimeTitle.classList.add("minesweeper_time_title");
    minesweeperTimer.append(minesweeperTimeTitle);

    const minesweeperTimeName = document.createElement("p");
    minesweeperTimeName.classList.add("minesweeper_time_name");
    minesweeperTimeTitle.append(minesweeperTimeName);
    minesweeperTimeName.textContent = "time";

    const minesweeperTimeEyes = document.createElement("span");
    minesweeperTimeEyes.classList.add("minesweeper_time_eyes");
    minesweeperTimeTitle.append(minesweeperTimeEyes);

    const minesweeperTime = document.createElement("div");
    minesweeperTime.classList.add("minesweeper_time");
    minesweeperTimer.append(minesweeperTime);
    minesweeperTime.textContent = "0:0";

    minesweeperHeader.append(
      createFlags(flagsPicsArray, firstLaunchFlagsNumber)
    );

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

    minesweeperWrapper.append(minesweeperField);

    const minesweeperFooter = document.createElement("div");
    minesweeperFooter.classList.add("minesweeper_footer");
    minesweeperWrapper.append(minesweeperFooter);

    const minesweeperDangerSign = document.createElement("div");
    minesweeperDangerSign.classList.add("minesweeper_danger_sign");
    minesweeperFooter.append(minesweeperDangerSign);

    const minesweeperDangerText = document.createElement("span");
    minesweeperDangerText.classList.add("minesweeper_danger_text");
    minesweeperDangerSign.append(minesweeperDangerText);
    minesweeperDangerText.textContent = "danger";

    const minesweeperSound = document.createElement("span");
    minesweeperSound.classList.add("minesweeper_sound");
    minesweeperDangerSign.append(minesweeperSound);

    const minesweeperDangerTiger = document.createElement("span");
    minesweeperDangerTiger.classList.add("minesweeper_danger_tiger");
    minesweeperFooter.append(minesweeperDangerTiger);

    minesweeperFooter.append(createTheme());

    const minesweeperCopyright = document.createElement("div");
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

    const minesweeperButtons = document.createElement("div");
    minesweeperButtons.classList.add("minesweeper_buttons");
    minesweeperWrapper.append(minesweeperButtons);

    const minesweeperRestart = document.createElement("div");
    minesweeperRestart.classList.add("minesweeper_restart");
    minesweeperButtons.append(minesweeperRestart);
    minesweeperRestart.textContent = "restart";

    changeButtonsTheme(minesweeperRestart);
  }

  createLayout();

  getFirstClick(
    minesweeperField,
    minesweeperCellsNumber,
    firstLaunchMinesNumber,
    mines,
    isGame,
    isGameOver,
    isWin,
    flagsPicsArray
  );

  return minesweeperField;
}
