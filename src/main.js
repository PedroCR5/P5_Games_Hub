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
//// Tablero
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
const playersList = document.createElement("ul");
laOcaPlayersDiv.append(playersList);
//Pintar los jugadores
numberPlayers.addEventListener('input', () => {
  playersList.innerHTML = "";
  let i = 0;
  for (i; i < numberPlayers.value; i++) {
    const playerLi = document.createElement("li");
    const playerName = document.createElement("p");
    const playerDice = document.createElement("button");
    playersList.append(playerLi);
    playerLi.append(playerName);
    playerLi.append(playerDice);
    playerLi.id = `Jugador ${i + 1}Li`;
    playerName.id = `JugadorName ${i + 1}Name`;
    playerDice.id = `JugadorDice ${i + 1}Dice`;
    playerLi.className = `jugador`;
    playerName.className = `jugadorName`;
    playerDice.className = `jugadorDice`;
    playerName.textContent = `Jugador ${i + 1}`;
    playerDice.textContent = `Jugador ${i + 1} pulsa aquí`;
  }
  const diceGif = document.createElement("image");
  diceGif.id = `dados`;
  laOcaPlayersDiv.append(diceGif);
  const diceValue = document.createElement("number");
  diceValue.id = `dadoValor`;
  laOcaPlayersDiv.append(diceValue);
  const playersDice = document.querySelectorAll('.jugadorDice');
  playersDice.forEach(dice => {
    dice.addEventListener('click', () => {
      //player = clickCasillaCheck(dice, playerDice);
      console.log("dados");
      // Generar un número aleatorio entre 1 y 6
      const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
      console.log(numeroAleatorio);
      const diceValue = document.querySelector(`#dadoValor`);
      diceValue.textContent = numeroAleatorio;
    });
  });
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