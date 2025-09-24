import { createImputNumberPlayers, createPlayerToPlay, moverFichaJugador, printOca, casillasOcaTablero, lostTurnPlayer1 } from './games/laOca/laOca';
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
//? Casillas especiales perdida de turnos
//? Jugador ganador
//? Reiniciar partida
//? localStorage puntuaciones
//? Reset puntuaciones
//// turno repetido de oca en oca
//// Señalar dado a tirar
//// jugadores entre 1 y 4
export let positionPlayer1 = "1";
export let positionPlayer2 = "1";
export let positionPlayer3 = "1";
export let positionPlayer4 = "1";
//export let lostTurnPlayer1 = "8";
export let lostTurnPlayer2 = 0;
export let lostTurnPlayer3 = 0;
export let lostTurnPlayer4 = 0;

function prueba() {
  let var1 = "1";
  let var2 = 1;
  var var3 = "1";
  var var4 = 1;
  const var5 = "1";
  const var6 = 1;
  console.log(var1);
  console.log(var2);
  console.log(var3);
  console.log(var4);
  console.log(var5);
  console.log(var6);
  var1 = "2" + 1;
  var2 = 2 + 1;
  var3 = "2" + 1;
  var4 = 2 + 1;

  console.log(var1);
  console.log(var2);
  console.log(var3);
  console.log(var4);
  console.log(var5);
  console.log(var6);
  var1++
  var2++
  var3++
  var4++
  function cambio() {
    console.log("primero");

    var1 += 5
    var2 += 5
    var3 += 5
    var4 += 5
    console.log(var1);
    console.log(var2);
    console.log(var3);
    console.log(var4);
    var1 -= 2
    var2 -= 2
    var3 -= 2
    var4 -= 2
    console.log(var1);
    console.log(var2);
    console.log(var3);
    console.log(var4);
    console.log("último");

  }
  cambio()
  console.log(var1);
  console.log(var2);
  console.log(var3);
  console.log(var4);
  var1 += 5
  var2 += 5
  var3 += 5
  var4 += 5
  console.log(var1);
  console.log(var2);
  console.log(var3);
  console.log(var4);
  var1 -= 2
  var2 -= 2
  var3 -= 2
  var4 -= 2
  console.log(var1);
  console.log(var2);
  console.log(var3);
  console.log(var4);
}



let lostTurnPlayers = {
  player1: 0, player2: 0, player3: 0, player4: 0,
};
//console.log(lostTurnPlayers.player1);
//lostTurnPlayers.player1--;
//console.log(lostTurnPlayers.player1);



printOca();
//Hacer un input nº jugadores y luego con bucle crearlos (nombre, color)
createImputNumberPlayers();
//Pintar los jugadores
const numberPlayers = document.getElementById("jugadoresOca");
export let clavePlayerCurrent = "jugador1";
/*   let playersCurrentDice = document.getElementById("1Dice");
  playersCurrentDice.className = "jugadorDiceCurrent"; */

numberPlayers.addEventListener('input', () => {
  createPlayerToPlay();
  //lostTurnPlayers.player1--;
  console.log(lostTurnPlayers.player1);
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
          /*   console.log("hola 1");
            console.log(positionPlayer1); */
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
          //console.log(lostTurnPlayers.player1);
          lostTurnPlayers.player1--;

          //let numero1 = lostTurnPlayer1 - 2;
          //lostTurnPlayer1 == numero1
          //console.log(lostTurnPlayers.player1);
          //lostTurnPlayers.player1 = 4;

          //console.log(lostTurnPlayers.player1);

          //lostTurnPlayer1 = lostTurnPlayer1;
          clavePlayerCurrent = "jugador2";
          let playersCurrentDice2 = document.getElementById("2Dice");
          playersCurrentDice2.className = "jugadorDiceCurrent";
          let playersCurrentDice1 = document.getElementById("1Dice");
          playersCurrentDice1.className = "jugadorDice";
          //const cambio = lostTurnPlayer1 - 1;
          return //cambio;
        }
        //console.log(cambio);

        console.log(lostTurnPlayers.player1);

      } else if ((dice.id == "2Dice") && (clavePlayerCurrent == "jugador2")) {
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
          /*  if (lostTurnPlayer3 > 0) {
             lostTurnPlayer3--;
             clavePlayerCurrent = "jugador4";
             let playersCurrentDice4 = document.getElementById("4Dice");
             playersCurrentDice4.className = "jugadorDiceCurrent";
             let playersCurrentDice2 = document.getElementById("2Dice");
             playersCurrentDice2.className = "jugadorDice";
           } */
          clavePlayerCurrent = "jugador3";
          let playersCurrentDice3 = document.getElementById("3Dice");
          playersCurrentDice3.className = "jugadorDiceCurrent";
          let playersCurrentDice2 = document.getElementById("2Dice");
          playersCurrentDice2.className = "jugadorDice";
        };
      } else if ((dice.id == "3Dice") && (clavePlayerCurrent == "jugador3")) {
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
          /*   if (lostTurnPlayer4 > 0) {
              lostTurnPlayer4--;
              clavePlayerCurrent = "jugador1";
              let playersCurrentDice1 = document.getElementById("1Dice");
              playersCurrentDice1.className = "jugadorDiceCurrent";
              let playersCurrentDice3 = document.getElementById("3Dice");
              playersCurrentDice3.className = "jugadorDice";
            } */
          clavePlayerCurrent = "jugador4";
          let playersCurrentDice4 = document.getElementById("4Dice");
          playersCurrentDice4.className = "jugadorDiceCurrent";
          let playersCurrentDice3 = document.getElementById("3Dice");
          playersCurrentDice3.className = "jugadorDice";
        };
      }
      else if ((dice.id == "4Dice") && (clavePlayerCurrent == "jugador4")) {
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
          /*   if (lostTurnPlayer1 > 0) {
              lostTurnPlayer1--;
              clavePlayerCurrent = "jugador2";
              let playersCurrentDice2 = document.getElementById("2Dice");
              playersCurrentDice2.className = "jugadorDiceCurrent";
              let playersCurrentDice4 = document.getElementById("4Dice");
              playersCurrentDice4.className = "jugadorDice";
            } */
          clavePlayerCurrent = "jugador1";
          let playersCurrentDice1 = document.getElementById("1Dice");
          playersCurrentDice1.className = "jugadorDiceCurrent";
          let playersCurrentDice4 = document.getElementById("4Dice");
          playersCurrentDice4.className = "jugadorDice";
        };
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