import { soundsData } from "../data/data_sounds";

export function appendAudio(cellsArray) {
  for (let i = 0; i < cellsArray.length; i++) {
    if (!cellsArray[i].classList.contains("minesweeper_new_mine")) {
      cellsArray[i].addEventListener("click", () => {
        const clickCell = soundsData.slice(-6);
        const randomCellSounds = clickCell.sort(() => Math.random() - 0.5).at(-1);
        console.log(clickCell);
        const playCellSound = new Audio(randomCellSounds);
        playCellSound.play();
      });
    }
  }
}
