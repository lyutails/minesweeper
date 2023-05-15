import { createOverlay } from "../look/overlay";

export function newGame() {
  const newgameModal = document.createElement("div");
  newgameModal.classList.add("newgame_modal");

  const newgameText = document.createElement("p");
  newgameText.classList.add("newgame_text");
  newgameModal.append(newgameText);
  newgameText.textContent = "pick how many mines you want";
  // pick how dangerously you want it to be

  const newgameMines = document.createElement("div");
  newgameMines.classList.add("newgame_mines");
  newgameModal.append(newgameMines);

  const numberOfMines = 99;

  for (let i = 1; i <= numberOfMines; i++) {
    const newgameCircle = document.createElement("div");
    newgameCircle.classList.add("newgame_circle");
    newgameCircle.textContent = `${[i]}`;
    newgameMines.append(newgameCircle);
  }

  createOverlay(newgameModal);

  return newgameModal;
}
