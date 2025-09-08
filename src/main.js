import { createImputNumberPlayers, createPlayerToPlay, printOca } from './games/laOca/laOca';
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
//// Tablero
//? Dado random
//? Fichas
//? Cambio de turno
//? Casillas especiales
//? Jugador ganador
//? Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones
//? jugadores entre 1 y 4
export const positionPlayer1 = "1";

printOca();
//Hacer un input nº jugadores y luego con bucle crearlos (nombre, color)
createImputNumberPlayers();
//Pintar los jugadores
const numberPlayers = document.getElementById("jugadoresOca");
/* numberPlayers.min = "1";
numberPlayers.max = "4"; */
numberPlayers.addEventListener('input', () => {
  createPlayerToPlay();
  const playersDice = document.querySelectorAll('.jugadorDice');
  playersDice.forEach(dice => {
    dice.addEventListener('click', () => {
      console.log(dice);

      //player = clickCasillaCheck(dice, playerDice);
      //console.log("dados");
      // Generar un número aleatorio entre 1 y 6
      const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
      console.log(numeroAleatorio);
      const diceValue = document.querySelector(`#dadoValor`);
      diceValue.textContent = `Te ha salido un ${numeroAleatorio}`;
      console.log(dice);

    });
  });
});

//crearFicha1();



/* const casillaActual1 = document.getElementById(`${positionFicha1}`);
casillaActual1.append(ficha1); */

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