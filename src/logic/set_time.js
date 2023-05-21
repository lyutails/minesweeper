export function startTimer(minesweeperTime) {
  window.onload = function () {
    let minute = 0;
    let sec = 0;
    setInterval(function () {
        minesweeperTime.textContent =
        minute + ":" + sec;
      sec++;

      if (sec === 60) {
        minute++;
        sec = 0;
      }
    }, 1000);
  };
}
