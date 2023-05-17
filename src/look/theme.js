import { changeTheme } from "../logic/change_theme";
import { themeData } from "../data/data_theme";

export function createTheme() {
  const minesweeperThemeWrapper = document.createElement("div");
  minesweeperThemeWrapper.classList.add("minesweeper_theme_wrapper");

  const minesweeperTheme = document.createElement("div");
  minesweeperTheme.classList.add("minesweeper_theme");
  minesweeperThemeWrapper.append(minesweeperTheme);

  const minesweeperDay = document.createElement("span");
  minesweeperDay.classList.add("minesweeper_day");
  minesweeperTheme.append(minesweeperDay);

  const minesweeperNight = document.createElement("span");
  minesweeperNight.classList.add("minesweeper_night");
  minesweeperTheme.append(minesweeperNight);

  const minesweeperThemeDivider = document.createElement("span");
  minesweeperThemeDivider.classList.add("minesweeper_theme_divider");
  minesweeperTheme.append(minesweeperThemeDivider);

  const themeCirclesWrapper = document.createElement("div");
  themeCirclesWrapper.classList.add("minesweeper_circles_wrapper");
  minesweeperThemeWrapper.append(themeCirclesWrapper);

  let themesNumber = 7;
  let themeChangerColors = ['#eb122b', '#eb6e12', '#ebd412', '#12eb63', '#12ebd9', '#1278eb', '#9c12eb'];
  let themeCircles = [];

  for (let i = 0; i < themesNumber; i++) {
    const themeCircle = document.createElement("span");
    themeCircle.classList.add("minesweeper_theme_circle");
    themeCirclesWrapper.append(themeCircle);
    themeCircles.push(themeCircle);
  }

  themeCircles.forEach((element, i) => {
    element.style.backgroundColor = themeChangerColors[i];
  })

  for (let i = 0; i < themeCircles.length; i++) {
    themeCircles[i].addEventListener("click", () => {
      minesweeperDay.style.backgroundImage = `url(${themeData[i].day})`;
      minesweeperNight.style.backgroundImage = `url(${themeData[i].night})`;
    });
  }

  changeTheme(minesweeperNight, minesweeperDay, minesweeperTheme);

  return minesweeperThemeWrapper;
}
