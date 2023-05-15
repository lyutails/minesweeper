export function removePopup(overlay) {
  const modal = document.querySelector(".newgame_modal");

  function closePopup() {
    return overlay.addEventListener("click", () => {
      overlay.remove();
      // newgameModal.remove();
      modal.remove();
    });
  }
  closePopup();
}
