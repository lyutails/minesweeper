export function colorNumbers() {
  const numbers = [...document.querySelectorAll(".minesweeper_checked")];
  console.log(numbers);

  numbers.forEach((number) => {
    if (number.hasAttribute("data", '1') === true) {
      number.style.color === "#c6005f";
    }
    if (number.hasAttribute("data") === "2") {
      number.style.color === "#125e5f";
    }
    if (number.hasAttribute("data") === "3") {
      number.style.color === "#f26d5f";
    }
    if (number.hasAttribute("data") === "4") {
      number.style.color === "#f3415f";
    }
  });
}
