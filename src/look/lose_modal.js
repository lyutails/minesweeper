export function loseModal() {
  const loseModalBody = document.createElement("div");
  loseModalBody.classList.add("lose_modal_body");
  loseModalBody.textContent = "game over\r\ntry again";

  return loseModalBody;
}
