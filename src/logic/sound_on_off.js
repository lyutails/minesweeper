import { appendAudio } from "./audio";

export function soundOnOff(cellsArray) {
  let isSound = true;
  const soundSwitcher = document.querySelector(".minesweeper_danger_sign");
  const soundText = document.querySelector(".minesweeper_danger_text");
  const soundSign = document.querySelector(".minesweeper_sound");
  //   const megafon = window.getComputedStyle(
  //     document.querySelector(".minesweeper_danger_text"),
  //     ":after"
  //   );
  soundSwitcher.addEventListener("click", () => {
    soundSwitcher.classList.toggle("active");
    if (!soundSwitcher.classList.contains("active")) {
      isSound = true;
      appendAudio(cellsArray);
      soundText.classList.remove('active');
      soundSign.classList.remove('active');
    }
    if (soundSwitcher.classList.contains("active")) {
      isSound = false;
      soundText.classList.add('active');
      soundSign.classList.add('active');
    }
  });
}
