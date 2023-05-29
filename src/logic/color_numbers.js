// export function colorNumbers() {
//   const cell = document.querySelector(".minesweeper_cell");
//   const field = document.querySelector(".minesweeper_field");
//   if (cell) {
//     field.addEventListener("click", () => {
//       if (document.querySelector(".minesweeper_checked")) {
//         const numbers = [...document.querySelectorAll(".minesweeper_checked")];
//         console.log(numbers);

//         for (let i = 0; i < numbers.length; i++) {
//             if(numbers[i].getAttribute('data') === '1') {
//                 numbers[i].style.color = "#c6005f";
//             }
//         }

//         numbers.forEach((number) => {
//           if (number.getAttribute("data") === "1") {
//             number.style.color = "#c6005f";
//           }
//           if (number.getAttribute("data") === '2') {
//             number.style.color = "#125e5f";
//           }
//           if (number.getAttribute("data") === "3") {
//             number.style.color = "#f26d5f";
//           }
//           if (number.getAttribute("data") === "4") {
//             number.style.color = "#f3415f";
//           }
//         });
//       }
//     });
//   }
// }
