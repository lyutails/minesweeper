export function tigerClicks(minesweeperField) {
  if (minesweeperField.hasAttribute("clicked")) {
    [...document.querySelectorAll(".minesweeper_cell")].forEach(
      (element, i) => {
        let animNames = [
          "tiger_anim_one",
          "tiger_anim_two",
          "tiger_anim_three",
          "tiger_anim_four",
        ];
        const randomTigerAnims = animNames.sort(() => Math.random() - 0.5);
        element.addEventListener("click", () => {
          function tigerAnim() {
            if (
              document
                .querySelector(".minesweeper_danger_tiger")
                .classList.contains("on")
            ) {
              document
                .querySelector(".minesweeper_danger_tiger")
                .classList.remove("on");
            }
            //   requestAnimationFrame(() => {
            //     document.querySelector('.minesweeper_danger_tiger').classList.add("on");
            //   });
            if (
              !document
                .querySelector(".minesweeper_danger_tiger")
                .classList.contains("on")
            ) {
              setTimeout(() => {
                document
                  .querySelector(".minesweeper_danger_tiger")
                  .classList.add("on");
                document.querySelector(
                  ".minesweeper_danger_tiger.on"
                ).style.animationName = randomTigerAnims[0];
                console.log(randomTigerAnims[0]);
              }, 50);
            }
          }
          tigerAnim();
        });
      }
    );
  }
}
