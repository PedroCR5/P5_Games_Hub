import { printOca } from './games/laOca/laOca';
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
//? Hacer tirada de dados
//? Tablero
//? Dado random
//? Fichas
//? Cambio de turno
//? Casillas especiales
//? Jugador ganador
//? Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones



printOca();

//Hacer un input nº jugadores y luego con bucle crearlos (nombre, color)
const laOcaPlayersDiv = document.querySelector(`#laOcaPlayers`);
const numberPlayers = document.createElement("input");
numberPlayers.value = "1";
numberPlayers.id = "jugadoresOca";
numberPlayers.placeholder = "Número de jugadores";
numberPlayers.type = "number";
laOcaPlayersDiv.append(numberPlayers);
const playersList = document.createElement("div");
laOcaPlayersDiv.append(playersList);
//Pintar los jugadores
numberPlayers.addEventListener('input', () => {
  playersList.innerHTML = "";
  let i = 0;
  for (i; i < numberPlayers.value; i++) {
    console.log(`Hola jugador ${i + 1}`);
    const player = document.createElement("button");
    playersList.append(player);
    player.id = `Jugador ${i + 1}`;
    player.textContent = `Jugador ${i + 1}`;
  }
});

/* for (i = 0; i < inputInfoValue.value; i++) {
  console.log("Hola");


} */
/* const player1 = document.createElement("button");
const player2 = document.createElement("button");
tresEnRayaPlayersDiv.append(player1);
tresEnRayaPlayersDiv.append(player2);
player1.className = "player1";
player2.className = "player2";
player1.textContent = "Jugador 1";
player2.textContent = "Jugador 2"; */






//! Memory
//? Tema de cartas imput
//? Las 10/20 cartas
//? Puntos
//? Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones