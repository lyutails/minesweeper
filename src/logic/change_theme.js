export function changeTheme(
  minesweeperNight,
  minesweeperDay,
  minesweeperTheme
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
}
