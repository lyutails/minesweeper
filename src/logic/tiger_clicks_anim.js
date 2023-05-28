export function tigerClicks(minesweeperField) {
  if (minesweeperField.hasAttribute("clicked")) {
    let animNames = [
      "tiger_anim_one",
      "tiger_anim_two",
      "tiger_anim_three",
      "tiger_anim_four",
    ];
    let allPossibleClicks = 1000;
    [...document.querySelectorAll(".minesweeper_cell")].forEach(
      (element, i) => {
        element.addEventListener("click", () => {
          function anim() {
            document
              .querySelector(".minesweeper_danger_tiger")
              .classList.remove("on");
            //   requestAnimationFrame(() => {
            //     document.querySelector('.minesweeper_danger_tiger').classList.add("on");
            //   });
            setTimeout(() => {
              document
                .querySelector(".minesweeper_danger_tiger")
                .classList.add("on");
            }, 50);
          }
          anim();
        });
      }
    );
  }
}
