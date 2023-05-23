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

  const field = document.querySelector(".minesweeper_field");
    minesweeperNight.addEventListener("click", () => {
      if (field.classList.contains("active")) {
        return field;
      } else {
        field.classList.add("active");
      }
    });
    minesweeperDay.addEventListener("click", () => {
      if (document.querySelector(".minesweeper_field").classList.contains("active")) {
        document.querySelector(".minesweeper_field").classList.remove("active");
      } else {
        return field;
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
        if (field.classList.contains("active")) {
          return;
        } else {
          field.classList.add("active");
        }
        if (document.querySelectorAll(".minesweeper_cell")) {
          document.querySelectorAll(".minesweeper_cell").forEach((element) => {
            element.classList.add("active");
          });
        }
      });
      minesweeperDay.addEventListener("click", () => {
        {
          minesweeperTheme.classList.remove("active");
          minesweeperNight.classList.remove("active");
          minesweeperDay.classList.remove("active");
          body.style.background = `url("${dataBackground[i].day}") center center / cover no-repeat fixed`;
          if (field) {
            field.classList.remove("active");
          }
          if (document.querySelectorAll(".minesweeper_cell")) {
            document
              .querySelectorAll(".minesweeper_cell")
              .forEach((element) => {
                element.classList.remove("active");
              });
          }
        }
      });
    });
  });
}
