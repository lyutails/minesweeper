import { minesData } from "../data/data_mines";

export function shuffleMines(minesData) {
  for (let i = minesData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [minesData[i], minesData[j]] = [minesData[j], minesData[i]];
  }
  return minesData;
}
