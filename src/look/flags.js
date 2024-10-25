export function createFlags(flagsPicsArray, firstLaunchFlagsNumber) {
  const minesweeperFlagsHolder = document.createElement("div");
  minesweeperFlagsHolder.classList.add("minesweeper_flags_holder");
  minesweeperFlagsHolder.textContent = "flags";

  for (let i = 0; i < firstLaunchFlagsNumber; i++) {
    const minesweeperFlagPic = document.createElement("span");
    minesweeperFlagPic.classList.add("minesweeper_flag_pic");
    minesweeperFlagPic.style.backgroundImage = `url(${flagsPicsArray[i].pic})`;
    minesweeperFlagsHolder.append(minesweeperFlagPic);
  }

  return minesweeperFlagsHolder;
}
