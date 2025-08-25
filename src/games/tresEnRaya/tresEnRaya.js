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



//<a href="https://www.flaticon.es/iconos-gratis/cerca" title="cerca iconos">Cerca iconos creados por Pixel perfect - Flaticon</a>
//<a href="https://www.flaticon.es/iconos-gratis/circulo" title="circulo iconos">Circulo iconos creados por Designspace Team - Flaticon</a>
//<a href="https://www.flaticon.es/iconos-gratis/cerca" title="cerca iconos">Cerca iconos creados por Pixel perfect - Flaticon</a>