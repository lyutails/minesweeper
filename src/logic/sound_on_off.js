import { appendAudio } from "./audio";

export function soundOnOff(cellsArray) {
  let isSound = false;
  const soundSwitcher = document.querySelector(".minesweeper_danger_sign");
  const soundText = document.querySelector(".minesweeper_danger_text");
  const soundSign = document.querySelector(".minesweeper_sound");
  //   const megafon = window.getComputedStyle(
  //     document.querySelector(".minesweeper_danger_text"),
  //     ":after"
  //   );
  let play = appendAudio(cellsArray);
  let playSound = function (play, playTimeout) {
    let to;
    return function () {
      clearTimeout(to);
      to = setTimeout(play, playTimeout);
    };
  };
  soundSwitcher.addEventListener("click", () => {
    if (isSound === false) {
      soundSwitcher.classList.remove("active");
      soundText.classList.remove("active");
      soundSign.classList.remove("active");
      playSound(play, 200);
      isSound = true;
    } else {
      soundSwitcher.classList.add("active");
      soundText.classList.add("active");
      soundSign.classList.add("active");
      function stopSound() {
        appendAudio(cellsArray);
        if(isSound === true) {
            return;
        }
      }
      stopSound();
      isSound = false;
    }
    console.log(isSound);
  });
}
