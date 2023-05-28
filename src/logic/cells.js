import { createFlags } from "../look/flags";
import { applyFlag } from "./apply_flag";
import { getFirstClick } from "./first_click";
import { tigerClicks } from "./tiger_clicks_anim";

export function createCells() {
  let isGame = false;
  const minesweeperField = document.createElement("div");
  minesweeperField.classList.add("minesweeper_field");
  minesweeperField.setAttribute("id", "field_id");
  minesweeperField.textContent = "click me to start";
  let isGameOver = false;
  let isWin = false;
  let isFirstClick = false;
  const minesweeperCellsNumber = 10;
  const firstLaunchMinesNumber = 10;
  const mines = [];
  let j = 0;

  getFirstClick(
    minesweeperField,
    minesweeperCellsNumber,
    firstLaunchMinesNumber,
    mines,
    isGame,
    isGameOver,
    isWin
  );

  // setTimeout(function () {
  //   applyFlag(flagsPicsArray);
  // }, 800);

  // function secondRun(applyFlag) {
  //   setTimeout(() => {
  //     applyFlag(flagsPicsArray);
  //   }, 1000);
  // }
  // secondRun(applyFlag);
  // console.log(flagsPicsArray);

  // function secondRun(applyFlag) {
  //   setTimeout(() => {
  //     applyFlag(flagsPicsArray);
  //   }, 200);
  // }
  // console.log(flagsPicsArray);
  // secondRun(applyFlag);
  //thirdRun(tigerClicks);

  // const timeoutCallbackOne = () => {
  //   createFlags();
  // };
  // setTimeout(timeoutCallbackOne, 100);

  // const timeoutCallbackTwo = () => {
  //   applyFlag();
  // };
  // setTimeout(timeoutCallbackTwo, 200);

  // const timeoutCallbackThree = () => {
  //   tigerClicks();
  // };
  // setTimeout(timeoutCallbackThree, 300);

  // let promiseTigerFlags = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve(1), 2000);
  // });

  // getFirstClick(
  //   minesweeperField,
  //   minesweeperCellsNumber,
  //   firstLaunchMinesNumber,
  //   mines,
  //   isGame,
  //   isGameOver,
  //   isWin
  // )

  // promiseTigerFlags.then(createFlags);

  // promiseTigerFlags.then(applyFlag);

  // promiseTigerFlags.then(tigerClicks);

  // async function run() {
  //   await getFirstClick(
  //     minesweeperField,
  //     minesweeperCellsNumber,
  //     firstLaunchMinesNumber,
  //     mines,
  //     isGame,
  //     isGameOver,
  //     isWin
  //   );
  //   await applyFlag();
  //   await tigerClicks();
  // }
  // run();

  return minesweeperField;
}
