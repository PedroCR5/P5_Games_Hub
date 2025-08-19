import './tresEnRaya.css';
export const printTresEnRaya = (tresEnRayaTable, arrayTresEnRaya) => {

  tresEnRayaTable.innerHTML = "";
  for (const fila of arrayTresEnRaya) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      divCasilla.className = "casilla";
      if (columna[0]) {
        divCasilla.className = "pieza";
      }
      divCasilla.style.background = columna.slice(1);
      tresEnRayaTable.append(divCasilla);
    }
  }
  const tresEnRayaPlayersDiv = document.querySelector(`#tresEnRayaPlayers`);
  const player1 = document.createElement("button");
  const player2 = document.createElement("button");
  tresEnRayaPlayersDiv.append(player1);
  tresEnRayaPlayersDiv.append(player2);
  player1.className = "player1";
  player2.className = "player2";
  player1.textContent = "Jugador 1";
  player2.textContent = "Jugador 2";
};