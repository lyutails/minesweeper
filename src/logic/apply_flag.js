import { createFlags } from "../look/flags";

export function applyFlag(flagsPicsArray) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      const allCells = [...document.querySelectorAll(".minesweeper_cell")];
      const minesCounter = document.querySelector(".minesweeper_mines_counter");
      const clicksCounter = document.querySelector(
        ".minesweeper_clicks_counter"
      );
      let clicksCount = 1;
      allCells.forEach((element) => {
        element.addEventListener("click", () => {
          clicksCounter.textContent = `${clicksCount++}`;
        });
      });
      let flagsCount = 9;

      const flags = document.querySelector(".minesweeper_flags_holder");
      window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
      allCells.forEach((elem, i) => {
        elem.addEventListener("contextmenu", (e) => {
          if (!e.target.classList.contains("minesweeper_flagged")) {
            e.target.style.backgroundImage = `url(${
              flagsPicsArray.at(-1).pic
            })`;
            e.currentTarget.setAttribute("data-id", flagsPicsArray.at(-1).pic);
            flagsPicsArray.pop();
            e.target.classList.add("minesweeper_flagged");
            flags.removeChild(flags.lastChild);
            minesCounter.textContent = `${flagsCount--}`;
          } else {
            if (e.target.classList.contains("minesweeper_flagged")) {
              const url = e.currentTarget.getAttribute('data-id');
              const minesweeperSpan = document.createElement('span');

              e.currentTarget.style = '';
              e.currentTarget.classList.remove('minesweeper_flagged');
              minesweeperSpan.classList.backgroundImage = `url(${e.currentTarget.getAttribute('data-id')})`;
              flags.append(minesweeperSpan);
              minesCounter.textContent = `${flagsCount++}`;
              flagsPicsArray.push({ pic: url });
            }
          }
        });
      });
    },
    false
  );
}
