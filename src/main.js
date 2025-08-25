import { printTresEnRaya } from './games/tresEnRaya/tresEnRaya';
import { crearEstructuraPpal } from './structure/structure';
import './style.css'

crearEstructuraPpal()

//! Juego Tres en Raya
printTresEnRaya();
// Poner cruz o círculo al hacer click en la casilla
let player = "1";
const cells = document.querySelectorAll('.casilla');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    console.log("Cell clicked!");
    if (cell.classList.contains('cruz') || cell.classList.contains('círculo')) {
      console.log("Cell already occupied!");
      return;
    }
    if (player === "1") {
      cell.classList = "cruz";
      player = "2";
    } else if (player === "2") {
      cell.classList = "circulo";
      player = "1";
    }
    // Selecciona directamente el div hijo basado en el ID del padre
    const arrayTresEnRayaCheck = document.querySelectorAll('#tresEnRayaTable > div');
    const infoGanador = "";
    console.log(arrayTresEnRayaCheck);
    console.log(arrayTresEnRayaCheck[0].className);
    arrayTresEnRayaCheck.forEach(element => {

    });
    //console.log(infoGanador);
  });
});