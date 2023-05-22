export function defaultSize(minesweeperDefault) {
  const body = document.querySelector(".minesweeper_body");

  minesweeperDefault.addEventListener('click', () => {
    minesweeperWrapper.append(createCells());
  })
}
