export function createOverlay(newgameModal) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  overlay.addEventListener("click", () => {
    overlay.classList.add("active");
    newgameModal.classList.add('active');
  });

  return overlay;
}
