import { removePopup } from "../logic/remove_popup";
import { removePopupCross } from "../logic/remove_popup_cross";

export function createOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  removePopup(overlay);
  // removePopupCross(overlay);

  return overlay;
}
