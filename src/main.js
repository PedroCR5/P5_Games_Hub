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


// Add event listeners to each cell in the rendered table
const cells = document.querySelectorAll('.casilla');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    console.log("Cell clicked!");
    if (cell.className = "casilla") {
      cell.classList = "cruz";
      cell.classList = "círculo";
    }
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
