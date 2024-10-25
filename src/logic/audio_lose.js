import { soundsData } from "../data/data_sounds";

export function appendLoseAudio() {
  const playLose = new Audio(soundsData[0]);
  playLose.play();
}
