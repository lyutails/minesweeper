import { createFlags } from "../look/flags";
import { applyFlag } from "./apply_flag";
import { firstClick } from "./click_me";
import { startTimer } from "./set_time";
import { clickPopup } from "../look/click_popup";
import { createOverlay } from "../look/overlay";

export function getFirstClick(
  minesweeperField,
  minesweeperCellsNumber,
  firstLaunchMinesNumber,
  mines,
  isGame,
  isGameOver,
  isWin
) {
  window.onload = function () {
    let clickedOnce = false;
    document.getElementById("field_id").onclick = function () {
      if (!clickedOnce) {
        clickedOnce = true;
        // alert("you clicked me!");
        const body = document.querySelector(".minesweeper_body");
        body.insertAdjacentElement("afterbegin", createOverlay());
        body.insertAdjacentElement("afterbegin", clickPopup());
        document.getElementById("field_id").setAttribute("clicked", "");
        startTimer();
        firstClick(
          minesweeperField,
          minesweeperCellsNumber,
          firstLaunchMinesNumber,
          mines,
          isGame,
          isGameOver,
          isWin
        );
      }
    };
  };
}
