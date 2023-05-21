// import { minesData } from "../data/data_mines";
// import { createFlags } from "../look/flags";
// import { loseModal } from "../look/lose_modal";
// import { createOverlay } from "../look/overlay";
// import { createCells } from "./cells";
// import { shuffleMines } from "./shuffle_mines";

// export function addMinesPics() {
//   document.addEventListener(
//     "DOMContentLoaded",
//     function () {
//       (function () {
//         const field = document.querySelector(".minesweeper_field");
//         const handler = (function () {
//           let click = 0;
//           return function () {
//             if (click === 0) {
//               alert("clicked");
//             }
//             click++;
//           };
//         })();

//         field.addEventListener("click", handler, false);
//       })();
//     },
//     false
//   );

//   mines.forEach((element) => {
//     const body = document.querySelector(".minesweeper_body");
//     element.addEventListener("click", () => {
//       body.insertAdjacentElement("afterbegin", createOverlay());
//       body.insertAdjacentElement("afterbegin", loseModal());
//     });
//   });
// }
