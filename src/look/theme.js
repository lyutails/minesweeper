import { changeTheme } from "../logic/change_theme";

export function createTheme() {
  const minesweeperTheme = document.createElement("div");
  minesweeperTheme.classList.add("minesweeper_theme");

  const minesweeperDay = document.createElement("span");
  minesweeperDay.classList.add("minesweeper_day");
  minesweeperTheme.append(minesweeperDay);

  const minesweeperNight = document.createElement("span");
  minesweeperNight.classList.add("minesweeper_night");
  minesweeperTheme.append(minesweeperNight);

  const minesweeperThemeDivider = document.createElement("span");
  minesweeperThemeDivider.classList.add("minesweeper_theme_divider");
  minesweeperTheme.append(minesweeperThemeDivider);

  changeTheme(minesweeperNight, minesweeperDay, minesweeperTheme);

  return minesweeperTheme;
}
