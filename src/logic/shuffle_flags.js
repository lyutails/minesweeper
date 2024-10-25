import { flagsData } from "../data/data_flags";

export function shuffleFlags(flagsData) {
  for (let i = flagsData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flagsData[i], flagsData[j]] = [flagsData[j], flagsData[i]];
  }
  return flagsData;
}
