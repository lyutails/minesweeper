export function winModal() {
  const winModalBody = document.createElement("div");
  winModalBody.classList.add("win_modal_body");
  winModalBody.textContent = "you win ^^";

  return winModalBody;
}
