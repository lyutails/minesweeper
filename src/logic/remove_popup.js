export function removePopup(overlay) {
  const modal = document.querySelector(".newgame_modal");

  function closePopup() {
    return overlay.addEventListener("click", () => {
      overlay.remove();
      // newgameModal.remove();
      if (modal) {
        modal.remove();
      }
      if (document.querySelector(".lose_modal_body")) {
        document.querySelector(".lose_modal_body").remove();
      }
      if (document.querySelector(".win_modal_body")) {
        document.querySelector(".win_modal_body").remove();
      }
    });
  }
  closePopup();
}
