import { minesData } from "../data/data_mines";
import { createFlags } from "../look/flags";
import { loseModal } from "../look/lose_modal";
import { createOverlay } from "../look/overlay";
import { indicateMines } from "./indicate_mines";
import { shuffleMines } from "./shuffle_mines";

export function placeDefaultMines(cellsArray) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      (function () {
        const field = document.querySelector(".minesweeper_field");
        const handler = (function () {
          let click = 0;
          return function () {
            if (click === 0) {
              alert("clicked");
            }
            click++;
          };
        })();

        field.addEventListener("click", handler, false);
      })();
    },
    false
  );

  const firstLaunchMinesNumber = 10;
  const defaultMines = shuffleMines(minesData).slice(0, firstLaunchMinesNumber);
  const withoutMines = [];
  const minesArray = [];
  for (let i = 0; i < defaultMines.length; i++) {
    const newMine = document.createElement("span");
    newMine.classList.add("new_mine");
    newMine.style.backgroundImage = `url(${defaultMines[i]})`;
    const appendTo = cellsArray[Math.floor(Math.random() * cellsArray.length)];
    if (!appendTo.contains(newMine)) {
      appendTo.append(newMine);
      minesArray.push(newMine);
    } else {
      i = -1;
      continue;
    }
  }

  minesArray.forEach((element) => {
    const body = document.querySelector(".minesweeper_body");
    element.addEventListener("click", () => {
      body.insertAdjacentElement("afterbegin", createOverlay());
      body.insertAdjacentElement("afterbegin", loseModal());
    });
  });
}
