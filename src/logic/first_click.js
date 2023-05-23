import { startTimer } from "./set_time";

export function getFirstClick() {
  window.onload = function () {
    let clickedOnce = false;
    document.getElementById("field_id").onclick = function () {
      if (!clickedOnce) {
        clickedOnce = true;
        alert("you clicked me!");
        document.getElementById('field_id').setAttribute('field_data', 'clicked');
        startTimer();
      }
    };
  };
}
