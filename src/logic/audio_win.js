import { soundsData } from "../data/data_sounds";

export function appendWinAudio() {
  const playWin = new Audio(soundsData[1]);
  playWin.play();
}
