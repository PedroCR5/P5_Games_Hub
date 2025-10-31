import { clickCasillaCheck, printTresEnRaya } from './games/tresEnRaya/tresEnRaya';
import { crearEstructuraPpal } from './structure/structure';
import './style.css';
import { pintarMemory } from './games/memory/memory';
import { getImages } from './games/memory/infoAPI';
import { gameOca } from './games/laOca/laOca';
import { returnToChangeTheGame, selectGameToPlay } from './games/selectGame';
//? Guardar ganadores el local storage y ponerlo en la nav
crearEstructuraPpal()
//! Juego Tres en Raya
function gameTresEnRaya() {
  printTresEnRaya();
  // Poner cruz o círculo al hacer click en la casilla
  let player = "1";
  const cells = document.querySelectorAll('.casilla');
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      player = clickCasillaCheck(cell, player);
    });
  });
};
gameTresEnRaya();
//? localStorage puntuaciones
//! Juego la Oca
//? Jugador ganador
//? localStorage puntuaciones
gameOca();
//! Memory
//? localStorage ganador
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';
function gameMemory() {
  // Pinto el HTML
  pintarMemory();
  //Traer información inicial de la API y pintarla
  getImages('dog');
  //Voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.
};
gameMemory();
// Click para seleccionar le juego
selectGameToPlay();
// Click para volver a la pantalla inicial y resetear la partida jugada
returnToChangeTheGame();