import { appendAudio } from "./audio";

export function soundOnOff() {
  const soundSwitcher = document.querySelector(".minesweeper_danger_text");
  soundSwitcher.addEventListener("click", () => {
    let isSound = true;
    if (!soundSwitcher.classList.contains("active")) {
      soundSwitcher.classList.add("active");
      appendAudio(cellsArray);
    } else {
      soundSwitcher.classList.remove("active");
      isSound = false;
    }
  });
}
