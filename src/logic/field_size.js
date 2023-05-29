import { newGame } from "../look/new_game";
import { createOverlay } from "../look/overlay";

export function fieldSize(sizeArray) {
  const body = document.querySelector(".minesweeper_body");

  sizeArray.forEach((element) => {
    element.addEventListener("click", () => {
      body.insertAdjacentElement("afterbegin", newGame());
      body.insertAdjacentElement("afterbegin", createOverlay());
    });
  });
}
