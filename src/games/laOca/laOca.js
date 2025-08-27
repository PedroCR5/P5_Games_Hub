import './laOca.css';


let arrayTetris = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""], // 4
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];

const casillasOcaTablero = [
  { id: 1, tipo: "inicio" },
  { id: 2, tipo: "oca", destino: 8 },
  { id: 3, tipo: "normal" },
  { id: 4, tipo: "normal" },
  { id: 5, tipo: "puente", destino: 12 },
  { id: 6, tipo: "normal" },
  { id: 7, tipo: "normal" },
  { id: 8, tipo: "oca", destino: 12 },
  { id: 9, tipo: "normal" },
  { id: 10, tipo: "normal" },
  { id: 11, tipo: "normal" },
  { id: 12, tipo: "oca", destino: 17 },
  { id: 13, tipo: "normal" },
  { id: 14, tipo: "normal" },
  { id: 15, tipo: "normal" },
  { id: 16, tipo: "normal" },
  { id: 17, tipo: "oca", destino: 22 },
  { id: 18, tipo: "normal" },
  { id: 19, tipo: "normal" },
  { id: 20, tipo: "normal" },
  { id: 21, tipo: "normal" },
  { id: 22, tipo: "oca", destino: 28 },
  { id: 23, tipo: "normal" },
  { id: 24, tipo: "normal" },
  { id: 25, tipo: "normal" },
  { id: 26, tipo: "dados", destino: 13 },
  { id: 27, tipo: "normal" },
  { id: 28, tipo: "oca", destino: 34 },
  { id: 29, tipo: "normal" },
  { id: 30, tipo: "carcel", turnosPerdidos: 2 },
  { id: 31, tipo: "normal" },
  { id: 32, tipo: "normal" },
  { id: 33, tipo: "normal" },
  { id: 34, tipo: "oca", destino: 40 },
  { id: 35, tipo: "posada", turnosPerdidos: 1 },
  { id: 36, tipo: "normal" },
  { id: 37, tipo: "normal" },
  { id: 38, tipo: "normal" },
  { id: 39, tipo: "normal" },
  { id: 40, tipo: "oca", destino: 46 },
  { id: 41, tipo: "laberinto", destino: 30 },
  { id: 42, tipo: "normal" },
  { id: 43, tipo: "normal" },
  { id: 44, tipo: "normal" },
  { id: 45, tipo: "normal" },
  { id: 46, tipo: "oca", destino: 51 },
  { id: 47, tipo: "normal" },
  { id: 48, tipo: "normal" },
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
  const laOcaTable = document.querySelector(`#laOcaContainer`);
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
  let counter = "1";
  for (const fila of arrayOca) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      const datoCasilla = casillasOcaTablero[counter];
      divCasilla.className = `casillaOca ${datoCasilla.tipo}`;

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






      divCasilla.textContent = counter;

      counter++
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
