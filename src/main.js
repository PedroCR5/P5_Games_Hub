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

for (let i = 0; i < arrayTresEnRaya.length; i++) {
  //console.log("hola");

  for (let j = 0; j < arrayTresEnRaya[i].length; j++) {
    const element = arrayTresEnRaya[i][j];
    console.log("hola");
    element.addEventListener('click', () => {
      console.log("hola ok");
    })
    console.log("hola");

  }
}
