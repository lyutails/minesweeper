export function applyFlag(flagsPicsArray) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      const allCells = [...document.querySelectorAll(".minesweeper_cell")];
      const minesCounter = document.querySelector('.minesweeper_mines_counter');
      const clicksCounter = document.querySelector('.minesweeper_clicks_counter');
      let clicksCount = 1;
      allCells.forEach(element => {
        element.addEventListener('click', () => {
          clicksCounter.textContent = `${clicksCount++}`;
        });
      });
      let flagsCount = 9;
      allCells.forEach((elem, i) => {
        elem.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          e.target.style.backgroundImage = `url(${flagsPicsArray.reverse()[0].pic})`;
          flagsPicsArray.reverse().pop();
          // flagsPicsArray.at(0).style.display = 'none';
          // flagsPicsArray.reverse()[i].style.opacity = '0';
          console.log(flagsPicsArray);
          minesCounter.textContent = `${flagsCount--}`;
        });
      });
    },
    false
  );
}
