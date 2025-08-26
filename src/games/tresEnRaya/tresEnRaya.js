import './tresEnRaya.css';
export const printTresEnRaya = () => {
  const tresEnRayaTable = document.querySelector(`#tresEnRayaTable`);
  const arrayTresEnRaya = [
    [[""], [""], [""]],
    [[""], [""], [""]],
    [[``], [""], [""]]
  ];
  tresEnRayaTable.innerHTML = "";
  for (const fila of arrayTresEnRaya) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      divCasilla.className = "casilla";
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

export function clickCasillaCheck(cell, player) {

  console.log("Cell clicked!");
  if (cell.classList.contains('cruz') || cell.classList.contains('circulo')) {
    console.log("Cell already occupied!");
    return;
  }
  if (player === "1") {
    cell.classList = "cruz";
    player = "2";
  } else if (player === "2") {
    cell.classList = "circulo";
    player = "1";
  }
  // Comprobar si alguien ha ganado
  const arrayTresEnRayaCheck = document.querySelectorAll('#tresEnRayaTable > div');
  const infoGanador = [];
  arrayTresEnRayaCheck.forEach(element => {
    infoGanador.push(element.className);
  });
  if ((infoGanador[0] === "cruz" & infoGanador[1] === "cruz" & infoGanador[2] === 'cruz') || (infoGanador[3] === "cruz" & infoGanador[4] === "cruz" & infoGanador[5] === 'cruz') || (infoGanador[6] === "cruz" & infoGanador[7] === "cruz" & infoGanador[8] === 'cruz') || (infoGanador[0] === "cruz" & infoGanador[3] === "cruz" & infoGanador[6] === 'cruz') || (infoGanador[1] === "cruz" & infoGanador[4] === "cruz" & infoGanador[7] === 'cruz') || (infoGanador[2] === "cruz" & infoGanador[5] === "cruz" & infoGanador[8] === 'cruz') || (infoGanador[0] === "cruz" & infoGanador[4] === "cruz" & infoGanador[8] === 'cruz') || (infoGanador[2] === "cruz" & infoGanador[4] === "cruz" & infoGanador[6] === 'cruz')
  ) {
    setTimeout(() => {
      alert("Ha ganado el Jugador 1");
    }, 500);
  }
  else if ((infoGanador[0] === "circulo" & infoGanador[1] === "circulo" & infoGanador[2] === 'circulo') || (infoGanador[3] === "circulo" & infoGanador[4] === "circulo" & infoGanador[5] === 'circulo') || (infoGanador[6] === "circulo" & infoGanador[7] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[0] === "circulo" & infoGanador[3] === "circulo" & infoGanador[6] === 'circulo') || (infoGanador[1] === "circulo" & infoGanador[4] === "circulo" & infoGanador[7] === 'circulo') || (infoGanador[2] === "circulo" & infoGanador[5] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[0] === "circulo" & infoGanador[4] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[2] === "circulo" & infoGanador[4] === "circulo" & infoGanador[6] === 'circulo')
  ) {
    setTimeout(() => {
      alert("Ha ganado el Jugador 2");
    }, 500);
  }
  return player;
}

//<a href="https://www.flaticon.es/iconos-gratis/cerca" title="cerca iconos">Cerca iconos creados por Pixel perfect - Flaticon</a>
//<a href="https://www.flaticon.es/iconos-gratis/circulo" title="circulo iconos">Circulo iconos creados por Designspace Team - Flaticon</a>
//<a href="https://www.flaticon.es/iconos-gratis/cerca" title="cerca iconos">Cerca iconos creados por Pixel perfect - Flaticon</a>