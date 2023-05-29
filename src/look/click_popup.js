export function clickPopup() {
  const clickModalBody = document.createElement("div");
  clickModalBody.classList.add("click_modal_body");
  clickModalBody.textContent = "you clicked me!";

  return clickModalBody;
}
