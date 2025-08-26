import { clickCasillaCheck, printTresEnRaya } from './games/tresEnRaya/tresEnRaya';
import { crearEstructuraPpal } from './structure/structure';
import './style.css'

crearEstructuraPpal()
//? Pulsar para ir al juego

//! Juego Tres en Raya
printTresEnRaya();
// Poner cruz o círculo al hacer click en la casilla
let player = "1";
const cells = document.querySelectorAll('.casilla');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    player = clickCasillaCheck(cell, player);
  });
});
//? Nombre jugadores
//? localStorage puntuaciones
//? Reset puntuaciones
//? Reiniciar partida

//! Juego la Oca
//? Tablero
//? Dado random
//? Fichas
//? Cambio de turno
//? Casillas especiales
//? Jugador ganador
//? Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones

const printOca = () => {
  const laOcaTable = document.querySelector(`#laOcaContainer`);
  const arrayOca = [
    [[""], [""], [""]],
    [[""], [""], [""]],
    [[``], [""], [""]]
  ];
  laOcaTable.innerHTML = "";
  for (const fila of arrayOca) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      divCasilla.className = "casillaOca";
      laOcaTable.append(divCasilla);
    }
  }
  /*   const laOcaPlayersDiv = document.querySelector(`#laOcaPlayers`);
    const player1 = document.createElement("button");
    const player2 = document.createElement("button");
    laOcaPlayersDiv.append(player1);
    laOcaPlayersDiv.append(player2);
    player1.className = "playerOca1";
    player2.className = "playerOca2";
    player1.textContent = "Jugador 1";
    player2.textContent = "Jugador 2"; */
};


printOca();








//! Memory
//? Tema de cartas imput
//? Las 10/20 cartas
//? Puntos
//? Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones