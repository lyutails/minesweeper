import { dataBackground } from "../data/data_background";

export function changeTheme(
  minesweeperNight,
  minesweeperDay,
  minesweeperTheme,
  themeCircles
) {
  const body = document.querySelector(".minesweeper_body");

  minesweeperNight.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return e.target;
    } else {
      minesweeperTheme.classList.add("active");
      minesweeperNight.classList.add("active");
      minesweeperDay.classList.add("active");
      body.classList.add("active");
    }
  });

  minesweeperDay.addEventListener("click", () => {
    if (minesweeperTheme.classList.contains("active")) {
      minesweeperTheme.classList.remove("active");
      minesweeperNight.classList.remove("active");
      minesweeperDay.classList.remove("active");
      body.classList.remove("active");
    }
  });

  themeCircles.forEach((element, i) => {
    const body = document.querySelector(".minesweeper_body");
    element.addEventListener("click", () => {
      minesweeperNight.addEventListener("click", () => {
        minesweeperTheme.classList.add("active");
        minesweeperNight.classList.add("active");
        minesweeperDay.classList.add("active");
        body.style.background = `url("${dataBackground[i].night}") no-repeat center center fixed`;
        body.style.backgroundSize = "cover";
      });
      minesweeperDay.addEventListener("click", () => {
        {
          minesweeperTheme.classList.remove("active");
          minesweeperNight.classList.remove("active");
          minesweeperDay.classList.remove("active");
          body.style.background = `url("${dataBackground[i].day}") center center / cover no-repeat fixed`;
        }
      });
    });
  });
}
