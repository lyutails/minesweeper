import { soundsData } from "../data/data_sounds";

export function appendAudio() {
  const cellsListener = (new AbortController()).signal;
  const soundSwitcher = document.querySelector(".minesweeper_danger_sign");
  const allCells = document.querySelectorAll(".minesweeper_cell");
  const soundText = document.querySelector(".minesweeper_danger_text");
  const soundSign = document.querySelector(".minesweeper_sound");
  soundSwitcher.addEventListener("click", () => {
    soundSwitcher.classList.toggle("active");
    if (soundSwitcher.classList.contains("active")) {
      soundText.classList.add("active");
      soundSign.classList.add("active");
    } else {
      soundText.classList.remove("active");
      soundSign.classList.remove("active");
    }
  });

  for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", () => {
      if(!allCells[i].classList.contains("minesweeper_new_mine") &&
      !document.querySelector(".minesweeper_danger_sign").classList.contains("active")) {
        const clickCell = soundsData.slice(-6);
        const randomCellSounds = clickCell.sort(() => Math.random() - 0.5).at(-1);
        const playCellSound = new Audio(randomCellSounds);
        playCellSound.play();
      }
        else {
          (new AbortController()).abort();
        }
    }, {
      signal: cellsListener
    });
  }
}
