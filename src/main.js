import { printTresEnRaya } from './games/tresEnRaya/tresEnRaya';
import { crearEstructuraPpal } from './structure/structure';
import './style.css'

crearEstructuraPpal()
const tresEnRayaTable = document.querySelector(`#tresEnRayaTable`);
const arrayTresEnRaya = [
  [[""], [""], [""]],
  [[""], [""], [""]],
  [[""], [""], [""]]
];
printTresEnRaya(tresEnRayaTable, arrayTresEnRaya);


