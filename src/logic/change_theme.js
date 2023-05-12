export function changeTheme() {
  minesweeperNight.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return e.target;
    } else {
      minesweeperTheme.classList.add("active");
      minesweeperBody.style.background = url(
        "./refs/pics/background/jungle_dark_001.jpg"
      );
    }
  });

  minesweeperDay.addEventListener("click", () => {
    if (minesweeperTheme.classList.contains("active")) {
      minesweeperTheme.classList.remove("active");
      minesweeperNight.classList.remove("active");
    }
  });

  //   function checkDayNight() {
  //     if (minesweeperNight.classList.contains("active")) {
  //       minesweeperTheme.classList.add("active");
  //     } else {
  //       minesweeperTheme.classList.remove("active");
  //     }
  //   }
  //   checkDayNight();

  return changeTheme;
}
