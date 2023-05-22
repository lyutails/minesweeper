export function getFirstClick(cellsArray) {
  window.onload = function () {
    let clickedOnce = false;
    document.getElementById("field_id").onclick = function () {
      if (!clickedOnce) {
        clickedOnce = true;
        alert("you clicked me!");
        document.getElementById('field_id').setAttribute('clicked');
      }
    };
  };
}
