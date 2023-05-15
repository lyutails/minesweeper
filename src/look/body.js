import { setCookie } from "../logic/cookie";

export function createBody() {
  const minesweeperBody = document.body;
  minesweeperBody.classList.add("minesweeper_body");

  minesweeperBody.onload = setCookie();

  return minesweeperBody;
}
