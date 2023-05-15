import { removePopupCross } from "../logic/remove_popup_cross";

export function createCross(newgameModal) {
  const cross = document.createElement("div");
  cross.classList.add("popup_cross");
  newgameModal.append(cross);

  for(let i = 0; i < 2; i++) {
    const crossLine = document.createElement('span');
    crossLine.classList.add('popup_crossline');
    cross.append(crossLine);
  }

  removePopupCross(cross, newgameModal);
}