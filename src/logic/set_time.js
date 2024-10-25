export function startTimer() {
  const timer = document.querySelector(".minesweeper_time");
  let minute = 0;
  let sec = 0;
  setInterval(function () {
    timer.textContent = minute + ":" + sec;
    sec++;

    if (sec === 60) {
      minute++;
      sec = 0;
    }
  }, 1000);
}
