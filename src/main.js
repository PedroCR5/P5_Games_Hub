import { createImputNumberPlayers, createPlayerToPlay, moverFichaJugador, printOca, casillasOcaTablero } from './games/laOca/laOca';
import { clickCasillaCheck, printTresEnRaya } from './games/tresEnRaya/tresEnRaya';
import { crearEstructuraPpal } from './structure/structure';
import './style.css';
import { pintarMemory } from './games/memory/memory';
import { getImages } from './games/memory/infoAPI';

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
//// Casillas especiales perdida de turnos
//? Jugador ganador
//// Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones
//// turno repetido de oca en oca
//// Señalar dado a tirar
//// jugadores entre 1 y 4
export let positionPlayer1 = "1";
export let positionPlayer2 = "1";
export let positionPlayer3 = "1";
export let positionPlayer4 = "1";

let lostTurnPlayers = {
  player1: 0, player2: 0, player3: 0, player4: 0,
};

printOca();
//Hacer un input nº jugadores y luego con bucle crearlos (nombre, color)
createImputNumberPlayers();
//Pintar los jugadores
const numberPlayers = document.getElementById("jugadoresOca");
export let clavePlayerCurrent = "jugador1";

numberPlayers.addEventListener('input', () => {
  createPlayerToPlay();
  // console.log(lostTurnPlayers.player1);
  let playersCurrentDice = document.getElementById("1Dice");
  playersCurrentDice.className = "jugadorDice jugadorDiceCurrent";
  const playersDice = document.querySelectorAll('.jugadorDice');
  playersDice.forEach(dice => {
    dice.addEventListener('click', () => {

      // Generar un número aleatorio entre 1 y 6
      const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
      const diceValue = document.querySelector(`#dadoValor`);
      diceValue.textContent = `Te ha salido un ${numeroAleatorio}`;
      //Ver quien tiene el turno y mover su ficha
      if ((dice.id == "1Dice") && (clavePlayerCurrent == "jugador1")) {
        //console.log(lostTurnPlayer1);
        //lostTurnPlayers.player1--;
        console.log(lostTurnPlayers.player1);
        if (lostTurnPlayers.player1 == 0) {
          positionPlayer1 = parseInt(positionPlayer1) + parseInt(numeroAleatorio);
          positionPlayer1 = moverFichaJugador(1, positionPlayer1, numeroAleatorio);
          //Turnos perdidos
          if (positionPlayer1 == 19) {
            lostTurnPlayers.player1 = 1;
          } else if (positionPlayer1 == 30) {
            lostTurnPlayers.player1 = 3;
          } else if (positionPlayer1 == 41) {
            lostTurnPlayers.player1 = 2;
          }
          //comprobar valor para turno oca
          if (positionPlayer1 == 8 || positionPlayer1 == 12 || positionPlayer1 == 13 || positionPlayer1 == 5 || positionPlayer1 == 17 || positionPlayer1 == 22 || positionPlayer1 == 28 || positionPlayer1 == 48 || positionPlayer1 == 34 || positionPlayer1 == 40 || positionPlayer1 == 46 || positionPlayer1 == 51 || positionPlayer1 == 26 || positionPlayer1 == 60) {
            clavePlayerCurrent = "jugador1";
          } else {
            clavePlayerCurrent = "jugador2";
            let playersCurrentDice2 = document.getElementById("2Dice");
            playersCurrentDice2.className = "jugadorDiceCurrent";
            let playersCurrentDice1 = document.getElementById("1Dice");
            playersCurrentDice1.className = "jugadorDice";
          };
        } else {
          lostTurnPlayers.player1--;
          clavePlayerCurrent = "jugador2";
          let playersCurrentDice2 = document.getElementById("2Dice");
          playersCurrentDice2.className = "jugadorDiceCurrent";
          let playersCurrentDice1 = document.getElementById("1Dice");
          playersCurrentDice1.className = "jugadorDice";
          return //cambio;
        }

      } else if ((dice.id == "2Dice") && (clavePlayerCurrent == "jugador2")) {
        if (lostTurnPlayers.player2 == 0) {

          positionPlayer2 = parseInt(positionPlayer2) + parseInt(numeroAleatorio);
          positionPlayer2 = moverFichaJugador(2, positionPlayer2, numeroAleatorio);
          //Turnos perdidos
          if (positionPlayer2 == 19) {
            lostTurnPlayers.player2 = 1;
          } else if (positionPlayer2 == 30) {
            lostTurnPlayers.player2 = 3;
          } else if (positionPlayer2 == 41) {
            lostTurnPlayers.player2 = 2;
          }
          //Cambiar la clase de los dados
          //comprobar valor para turno oca
          if (positionPlayer2 == 8 || positionPlayer2 == 12 || positionPlayer2 == 13 || positionPlayer2 == 5 || positionPlayer2 == 17 || positionPlayer2 == 22 || positionPlayer2 == 28 || positionPlayer2 == 48 || positionPlayer2 == 34 || positionPlayer2 == 40 || positionPlayer2 == 46 || positionPlayer2 == 51 || positionPlayer2 == 26 || positionPlayer2 == 60) {
            clavePlayerCurrent = "jugador2";
          } else {
            clavePlayerCurrent = "jugador3";
            let playersCurrentDice3 = document.getElementById("3Dice");
            playersCurrentDice3.className = "jugadorDiceCurrent";
            let playersCurrentDice2 = document.getElementById("2Dice");
            playersCurrentDice2.className = "jugadorDice";
          };
        } else {
          lostTurnPlayers.player2--;
          clavePlayerCurrent = "jugador3";
          let playersCurrentDice3 = document.getElementById("3Dice");
          playersCurrentDice3.className = "jugadorDiceCurrent";
          let playersCurrentDice2 = document.getElementById("2Dice");
          playersCurrentDice2.className = "jugadorDice";
          return //cambio;
        }
      } else if ((dice.id == "3Dice") && (clavePlayerCurrent == "jugador3")) {
        if (lostTurnPlayers.player3 == 0) {
          positionPlayer3 = parseInt(positionPlayer3) + parseInt(numeroAleatorio);
          positionPlayer3 = moverFichaJugador(3, positionPlayer3, numeroAleatorio);
          //Turnos perdidos
          if (positionPlayer3 == 19) {
            lostTurnPlayers.player3 = 1;
          } else if (positionPlayer3 == 30) {
            lostTurnPlayers.player3 = 3;
          } else if (positionPlayer3 == 41) {
            lostTurnPlayers.player3 = 2;
          }
          //Cambiar la clase de los dados
          //comprobar valor para turno oca
          if (positionPlayer3 == 8 || positionPlayer3 == 12 || positionPlayer3 == 13 || positionPlayer3 == 5 || positionPlayer3 == 17 || positionPlayer3 == 22 || positionPlayer3 == 28 || positionPlayer3 == 48 || positionPlayer3 == 34 || positionPlayer3 == 40 || positionPlayer3 == 46 || positionPlayer3 == 51 || positionPlayer3 == 26 || positionPlayer3 == 60) {
            clavePlayerCurrent = "jugador3";

          } else {

            clavePlayerCurrent = "jugador4";
            let playersCurrentDice4 = document.getElementById("4Dice");
            playersCurrentDice4.className = "jugadorDiceCurrent";
            let playersCurrentDice3 = document.getElementById("3Dice");
            playersCurrentDice3.className = "jugadorDice";
          };
        } else {
          lostTurnPlayers.player3--;
          clavePlayerCurrent = "jugador4";
          let playersCurrentDice4 = document.getElementById("4Dice");
          playersCurrentDice4.className = "jugadorDiceCurrent";
          let playersCurrentDice3 = document.getElementById("3Dice");
          playersCurrentDice3.className = "jugadorDice";
          return //cambio;
        }
      }
      else if ((dice.id == "4Dice") && (clavePlayerCurrent == "jugador4")) {
        if (lostTurnPlayers.player4 == 0) {

          positionPlayer4 = parseInt(positionPlayer4) + parseInt(numeroAleatorio);
          positionPlayer4 = moverFichaJugador(4, positionPlayer4, numeroAleatorio);
          //Turnos perdidos
          if (positionPlayer4 == 19) {
            lostTurnPlayers.player4 = 1;
          } else if (positionPlayer4 == 30) {
            lostTurnPlayers.player4 = 3;
          } else if (positionPlayer4 == 41) {
            lostTurnPlayers.player4 = 2;
          }
          //comprobar valor para turno oca
          if (positionPlayer4 == 8 || positionPlayer4 == 12 || positionPlayer4 == 13 || positionPlayer4 == 5 || positionPlayer4 == 17 || positionPlayer4 == 22 || positionPlayer4 == 28 || positionPlayer4 == 48 || positionPlayer4 == 34 || positionPlayer4 == 40 || positionPlayer4 == 46 || positionPlayer4 == 51 || positionPlayer4 == 26 || positionPlayer4 == 60) {
            clavePlayerCurrent = "jugador4";
          } else {
            clavePlayerCurrent = "jugador1";
            let playersCurrentDice1 = document.getElementById("1Dice");
            playersCurrentDice1.className = "jugadorDiceCurrent";
            let playersCurrentDice4 = document.getElementById("4Dice");
            playersCurrentDice4.className = "jugadorDice";
          };
        } else {
          lostTurnPlayers.player4--;
          clavePlayerCurrent = "jugador1";
          let playersCurrentDice1 = document.getElementById("1Dice");
          playersCurrentDice1.className = "jugadorDiceCurrent";
          let playersCurrentDice4 = document.getElementById("4Dice");
          playersCurrentDice4.className = "jugadorDice";
          return //cambio;
        }
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
//? Cartas tamaño
//? colocacion cartas
//? dar la vuelta a las cartas

//import { aceptNotification } from './src/components/modal/modal';
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';
//Variables
let firstSearchWord = 'nada de nada';

// Pinto el HTML
pintarMemory();
// Aceptar la notificación de busqueda errónea
/* const modalButton = document.querySelector(".tryAgain");
modalButton.addEventListener("click", aceptNotification); */
//Traer información inicial de la API y pintarla
getImages('cat');
//Voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.
/* document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    if (valorInput === '') {
      getImages(`cat`);
      event.target.value = '';
    }
    else {
      getImages(`${valorInput}`);
      event.target.value = '';
    }
  }
}); */
// Pinchar en icono Pinterest para refrescar la búsqueda inicial de gatos
/* document.querySelector(`.iconePinterest`).onclick = function () {
  getImages('cat');
}; */