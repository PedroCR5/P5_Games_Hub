import { printTresEnRaya } from './games/tresEnRaya/tresEnRaya';
import { crearEstructuraPpal } from './structure/structure';
import './style.css'

crearEstructuraPpal()
const tresEnRayaTable = document.querySelector(`#tresEnRayaTable`);
const arrayTresEnRaya = [
  [[""], [""], [""]],
  [[""], [""], [""]],
  [[``], [""], [""]]
];
printTresEnRaya(tresEnRayaTable, arrayTresEnRaya);
//console.log("hola");

let player = "1";
// Add event listeners to each cell in the rendered table
const cells = document.querySelectorAll('.casilla');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    console.log("Cell clicked!");
    if (player === "1") {
      cell.classList = "cruz";
      player = "2";
    } else if (player === "2") {
      cell.classList = "círculo";
      player = "1";
    }
    console.log(player);

    //cell.classList = "casillaOcupada";
  });
});


/* for (let i = 0; i < arrayTresEnRaya.length; i++) {

  for (let j = 0; j < arrayTresEnRaya[i].length; j++) {
    const element = arrayTresEnRaya[i][j];
    console.log("hola");
    element.addEventListener('click', () => {
      console.log("hola ok");
    })
    console.log("hola");

  }
} */
