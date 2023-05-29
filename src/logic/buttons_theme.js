export function changeButtonsTheme(
  minesweeperSave,
  minesweeperLoad,
  minesweeperTop
) {
  const night = document.querySelector(".minesweeper_night");
  const day = document.querySelector(".minesweeper_day");

  night.addEventListener("click", () => {
    minesweeperSave.classList.add("active");
    minesweeperLoad.classList.add("active");
    minesweeperTop.classList.add("active");
  });

  day.addEventListener("click", () => {
    minesweeperSave.classList.remove("active");
    minesweeperLoad.classList.remove("active");
    minesweeperTop.classList.remove("active");
  });
}
