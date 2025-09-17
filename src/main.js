import { createImputNumberPlayers, createPlayerToPlay, moverFichaJugador, printOca, casillasOcaTablero } from './games/laOca/laOca';
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
//// Hacer tirada de dados
//// Tablero
//// Dado random
//// Fichas
//// Cambio de turno
//? Casillas especiales
//? Jugador ganador
//? Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones
//? turno repetido de oca en oca
//// jugadores entre 1 y 4
export let positionPlayer1 = "1";
export let positionPlayer2 = "1";
export let positionPlayer3 = "1";
export let positionPlayer4 = "1";
export let lostTurnPlayer1 = "0";
export let lostTurnPlayer2 = "0";
export let lostTurnPlayer3 = "0";
export let lostTurnPlayer4 = "0";

printOca();
//Hacer un input nº jugadores y luego con bucle crearlos (nombre, color)
createImputNumberPlayers();
//Pintar los jugadores
const numberPlayers = document.getElementById("jugadoresOca");
export let clavePlayerCurrent = "jugador1";


numberPlayers.addEventListener('input', () => {
  createPlayerToPlay();
  const playersDice = document.querySelectorAll('.jugadorDice');
  playersDice.forEach(dice => {
    dice.addEventListener('click', () => {
      // Generar un número aleatorio entre 1 y 6
      const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
      const diceValue = document.querySelector(`#dadoValor`);
      diceValue.textContent = `Te ha salido un ${numeroAleatorio}`;
      //Ver quien tiene el turno y mover su ficha
      if ((dice.id == "1Dice") && (clavePlayerCurrent == "jugador1")) {
        if (lostTurnPlayer1 == 0) {
          positionPlayer1 = parseInt(positionPlayer1) + parseInt(numeroAleatorio);
          positionPlayer1 = moverFichaJugador(1, positionPlayer1, numeroAleatorio);
          const result = casillasOcaTablero.find(obj => obj.id == positionPlayer1);
          if (result.turnosPerdidos) {
            lostTurnPlayer1 = parseInt(result.turnosPerdidos);
          }
          /* if (positionPlayer1 == (8 || 12 || 13 || 5)) {
            clavePlayerCurrent = "jugador1";
          } else {
            clavePlayerCurrent = "jugador2";
          } */
        }
        else {
          lostTurnPlayer1--;
        }
        clavePlayerCurrent = "jugador2";
      } else if ((dice.id == "2Dice") && (clavePlayerCurrent == "jugador2")) {
        positionPlayer2 = parseInt(positionPlayer2) + parseInt(numeroAleatorio);
        positionPlayer2 = moverFichaJugador(2, positionPlayer2, numeroAleatorio);
        clavePlayerCurrent = "jugador3";
      } else if ((dice.id == "3Dice") && (clavePlayerCurrent == "jugador3")) {
        positionPlayer3 = parseInt(positionPlayer3) + parseInt(numeroAleatorio);
        positionPlayer3 = moverFichaJugador(3, positionPlayer3, numeroAleatorio);
        clavePlayerCurrent = "jugador4";
      }
      else if ((dice.id == "4Dice") && (clavePlayerCurrent == "jugador4")) {
        positionPlayer4 = parseInt(positionPlayer4) + parseInt(numeroAleatorio);
        positionPlayer4 = moverFichaJugador(4, positionPlayer4, numeroAleatorio);
        clavePlayerCurrent = "jugador1";
      }
    });
  });
});




//! Memory
//? Tema de cartas imput
//? Las 10/20 cartas
//? Puntos
//? Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones