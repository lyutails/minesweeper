export function removePopupCross(cross, newgameModal) {
  function closePopupCross() {
    return cross.addEventListener("click", () => {
      const overlay = document.querySelector(".overlay");

      cross.remove();
      newgameModal.remove();
      if (!overlay) {
        alert("none");
      } else {
        overlay.remove();
      }
    });
  }
  closePopupCross();
}
