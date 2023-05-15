import { removePopup } from "../logic/remove_popup";

export function createOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  removePopup(overlay);

  return overlay;
}
