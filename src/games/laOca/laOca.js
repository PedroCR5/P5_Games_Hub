import { clavePlayerCurrent, positionPlayer1 } from '../../main';
import './laOca.css';
export var lostTurnPlayer1 = 8 + 1;

export const casillasOcaTablero = [
  { id: 1, tipo: "inicio" },
  { id: 2, tipo: "oca", destino: 8 },
  { id: 3, tipo: "normal" },
  { id: 4, tipo: "normal" },
  { id: 5, tipo: "puente", destino: 12 },
  { id: 6, tipo: "normal" },
  { id: 7, tipo: "normal" },
  { id: 8, tipo: "oca", destino: 13 },
  { id: 9, tipo: "normal" },
  { id: 10, tipo: "normal" },
  { id: 11, tipo: "normal" },
  { id: 12, tipo: "puente", destino: 5 },
  { id: 13, tipo: "oca", destino: 17 },
  { id: 14, tipo: "normal" },
  { id: 15, tipo: "normal" },
  { id: 16, tipo: "normal" },
  { id: 17, tipo: "oca", destino: 22 },
  { id: 18, tipo: "normal" },
  { id: 19, tipo: "posada", turnosPerdidos: 1 },
  { id: 20, tipo: "normal" },
  { id: 21, tipo: "normal" },
  { id: 22, tipo: "oca", destino: 28 },
  { id: 23, tipo: "normal" },
  { id: 24, tipo: "normal" },
  { id: 25, tipo: "normal" },
  { id: 26, tipo: "dados", destino: 48 },
  { id: 27, tipo: "normal" },
  { id: 28, tipo: "oca", destino: 34 },
  { id: 29, tipo: "normal" },
  { id: 30, tipo: "carcel", turnosPerdidos: 3 },
  { id: 31, tipo: "normal" },
  { id: 32, tipo: "normal" },
  { id: 33, tipo: "normal" },
  { id: 34, tipo: "oca", destino: 40 },
  { id: 35, tipo: "normal" },
  { id: 36, tipo: "normal" },
  { id: 37, tipo: "normal" },
  { id: 38, tipo: "normal" },
  { id: 39, tipo: "normal" },
  { id: 40, tipo: "oca", destino: 46 },
  { id: 41, tipo: "laberinto", turnosPerdidos: 2 },
  { id: 42, tipo: "normal" },
  { id: 43, tipo: "normal" },
  { id: 44, tipo: "normal" },
  { id: 45, tipo: "normal" },
  { id: 46, tipo: "oca", destino: 51 },
  { id: 47, tipo: "normal" },
  { id: 48, tipo: "dados", destino: 26 },
  { id: 49, tipo: "normal" },
  { id: 50, tipo: "normal" },
  { id: 51, tipo: "oca", destino: 60 },
  { id: 52, tipo: "normal" },
  { id: 53, tipo: "normal" },
  { id: 54, tipo: "normal" },
  { id: 55, tipo: "calavera", destino: 1 },
  { id: 56, tipo: "normal" },
  { id: 57, tipo: "normal" },
  { id: 58, tipo: "normal" },
  { id: 59, tipo: "normal" },
  { id: 60, tipo: "oca", destino: 63 },
  { id: 61, tipo: "normal" },
  { id: 62, tipo: "normal" },
  { id: 63, tipo: "meta" }
];

export const printOca = () => {
  const laOcaTable = document.querySelector(`#laOcaTable`);
  const arrayOca = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ];
  laOcaTable.innerHTML = "";
  let counter = "0";
  for (const fila of arrayOca) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      const datoCasilla = casillasOcaTablero[counter];
      divCasilla.className = `casillaOca ${datoCasilla.tipo}`;
      divCasilla.id = `${datoCasilla.id}`;
      //Pasar a otra casilla
      if (datoCasilla.tipo === "oca") { };
      if (datoCasilla.tipo === "puente") { };
      if (datoCasilla.tipo === "dados") { };
      if (datoCasilla.tipo === "meta") { };
      //Perder turnos 
      if (datoCasilla.tipo === "posada") { };
      if (datoCasilla.tipo === "carcel") { };
      if (datoCasilla.tipo === "laberinto") { };
      if (datoCasilla.tipo === "calavera") { };
      divCasilla.textContent = counter + 1;
      //console.log(counter);
      laOcaTable.append(divCasilla);
      counter++
    }
  }

};
export function createImputNumberPlayers() {
  const laOcaPlayersDiv = document.querySelector(`#laOcaPlayers`);
  const numberPlayers = document.createElement("input");
  numberPlayers.type = 'number';
  numberPlayers.min = "1";
  numberPlayers.max = "4";

  numberPlayers.id = "jugadoresOca";
  numberPlayers.placeholder = "Número de jugadores";
  numberPlayers.type = "number";
  laOcaPlayersDiv.append(numberPlayers);
  const playersList = document.createElement("ul");
  playersList.id = "playerListId";
  //console.log(playersList);
  laOcaPlayersDiv.append(playersList);
}
export function createPlayerToPlay() {
  const playersList = document.getElementById(`playerListId`);
  const numberPlayers = document.getElementById("jugadoresOca");
  const laOcaPlayersDiv = document.querySelector(`#laOcaPlayers`);
  // console.log(playersList);

  playersList.innerHTML = "";
  let i = 0;
  for (i; i < numberPlayers.value; i++) {
    const playerLi = document.createElement("li");
    const playerName = document.createElement("p");
    const playerDice = document.createElement("button");
    playersList.append(playerLi);
    playerLi.append(playerName);
    playerLi.append(playerDice);
    playerLi.id = `${i + 1}Li`;
    playerName.id = `${i + 1}Name`;
    playerDice.id = `${i + 1}Dice`;
    playerLi.className = `jugador`;
    playerName.className = `jugadorName`;
    playerDice.className = `jugadorDice`;
    playerName.textContent = `Jugador ${i + 1}`;
    //Pintamos la ficha en la posición inicial

    const ficha1 = document.createElement("div");
    ficha1.id = `ficha${i + 1}`;
    ficha1.className = "fichaJugador";
    const casillaInicial = document.getElementById("1");
    //console.log(casillaInicial);
    //casillaInicial.innerHTML = "";
    casillaInicial.append(ficha1);

  }



  const diceGif = document.createElement("image");
  diceGif.id = `dados`;
  laOcaPlayersDiv.append(diceGif);
  const diceValue = document.createElement("number");
  diceValue.id = `dadoValor`;
  laOcaPlayersDiv.append(diceValue);

}

export function moverFichaJugador(n, position, numeroAleatorio) {
  const casillaAnterior = parseInt(position) - parseInt(numeroAleatorio);;
  //console.log(casillaAnterior);
  const parentDivA = document.getElementById(casillaAnterior);
  const childDivA = document.getElementById(`ficha${n}`);
  parentDivA.removeChild(childDivA);
  //const casillaActual = document.getElementById(position);
  let newPosition = `${position}`;
  //console.log(newPosition);
  if (newPosition > 63) {
    let diferencia = newPosition - 63;
    newPosition = 63 - diferencia;
  }
  const result = casillasOcaTablero.find(obj => obj.id == newPosition);
  if (result.destino) {
    newPosition = parseInt(result.destino);
  }


  /* switch (newPosition) {
    case "2":
      console.log(`Acción para ficha${n}`);
      setTimeout(() => {
        const diceValue = document.querySelector(`#dadoValor`);
        diceValue.textContent = `De oca a oca y tiro por que me toca`;
      }, 1000);
      newPosition = 8;
      //clavePlayerCurrent = `jugador${n}`;
      break;
    case "5":
      console.log(`Acción para ficha${n}`);
      setTimeout(() => {
        const diceValue = document.querySelector(`#dadoValor`);
        diceValue.textContent = `De oca a oca y tiro por que me toca`;
      }, 1000);
      newPosition = 12;
      break;
    case "8":
      console.log(`Acción para ficha${n}`);
      setTimeout(() => {
        const diceValue = document.querySelector(`#dadoValor`);
        diceValue.textContent = `De oca a oca y tiro por que me toca`;
      }, 1000);
      newPosition = 13;
      break;
    case "12":
      console.log(`Acción para ficha${n}`);
      setTimeout(() => {
        const diceValue = document.querySelector(`#dadoValor`);
        diceValue.textContent = `De oca a oca y tiro por que me toca`;
      }, 1000);
      newPosition = 5;
      break;
    case "13":
      console.log(`Acción para ficha${n}`);
      newPosition = 17;
      break;
    case "17":
      console.log(`Acción para ficha${n}`);
      newPosition = 22;
      break;
    case "19":
      console.log(`Acción para ficha${n}`);
      turnosPerdidos = 1;
      break;
    case "22":
      console.log(`Acción para ficha${n}`);
      newPosition = 28;
      break;
    case "26":
      console.log(`Acción para ficha${n}`);
      newPosition = 48;
      break;
    case "28":
      console.log(`Acción para ficha${n}`);
      newPosition = 34;
      break;
    case "30":
      console.log(`Acción para ficha${n}`);
      turnosPerdidos = 2;
      break;
    case "34":
      console.log(`Acción para ficha${n}`);
      newPosition = 40;
      break;
    case "40":
      console.log(`Acción para ficha${n}`);
      newPosition = 46;
      break;
    case "41":
      console.log(`Acción para ficha${n}`);
      newPosition = 30;
      break;
    case "46":
      console.log(`Acción para ficha${n}`);
      newPosition = 51;
      break;
    case "48":
      console.log(`Acción para ficha${n}`);
      newPosition = 26;
      break;
    case "51":
      console.log(`Acción para ficha${n}`);
      newPosition = 60;
      break;
    case "55":
      console.log(`Acción para ficha${n}`);
      newPosition = 1;
      break;
    case "60":
      console.log(`Acción para ficha${n}`);
      newPosition = 63;
      break;
    case "63":
      console.log(`Ha ganado el jugador con ficha${n}`);
      break;
    default:
      console.log("Casilla normal");
    //clavePlayerCurrent = `jugador${n + 1}`;

  } */
  //console.log(newPosition);
  const casillaNewPosition = document.getElementById(newPosition);
  const ficha = document.createElement("div");
  ficha.id = `ficha${n}`;
  ficha.className = "fichaJugador";
  casillaNewPosition.append(ficha);
  if (newPosition == 63) {
    console.log(`El jugador${n} ha ganado`);
    //Falta poner alert o aviso y parar la partida.
  }
  return newPosition;
};
