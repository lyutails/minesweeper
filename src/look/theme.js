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

  let themesNumber = 6;
  let themeChangerColors = [];
  let themeCircles = [];

  for (let i = 0; i < themesNumber; i++) {
    const themeCircle = document.createElement("span");
    themeCircle.classList.add("minesweeper_theme_circle");
    themeCirclesWrapper.append(themeCircle);
    themeCircles.push(themeCircle);
  }

  for (let i = 0; i < themeCircles.length; i++) {
    themeCircles[i].addEventListener("click", () => {
      minesweeperDay.style.backgroundImage = `url(${themeData[i].day})`;
      minesweeperNight.style.backgroundImage = `url(${themeData[i].night})`;
    });
  }

  // themeCircles.forEach((element) => {
  //   element.addEventListener("click", () => {
  //     minesweeperDay.style.backgroundImage = `url(${themeData.filter(elem => elem.day)})`;
  //     minesweeperNight.style.backgroundImage = `url(${themeData.filter(elem => elem.night)})`;
  //   });
  // });

  changeTheme(minesweeperNight, minesweeperDay, minesweeperTheme);

  return minesweeperThemeWrapper;
}
