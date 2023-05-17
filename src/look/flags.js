import { flagsData } from "../data/data_flags";
import { shuffleFlags } from "../logic/shuffle_flags";

export function createFlags() {
  const minesweeperFlagsHolder = document.createElement("div");
  minesweeperFlagsHolder.classList.add("minesweeper_flags_holder");
  minesweeperFlagsHolder.textContent = "flags";

  const firstLaunchFlagsNumber = 10;
  const flagsPicsArray = shuffleFlags(flagsData).slice(0, firstLaunchFlagsNumber);

  for (let i = 0; i < firstLaunchFlagsNumber; i++) {
    const minesweeperFlagPic = document.createElement("span");
    minesweeperFlagPic.classList.add("minesweeper_flag_pic");
    minesweeperFlagPic.style.backgroundImage = `url(${flagsPicsArray[i].pic})`;
    minesweeperFlagsHolder.append(minesweeperFlagPic);
  }

  return minesweeperFlagsHolder;
}
