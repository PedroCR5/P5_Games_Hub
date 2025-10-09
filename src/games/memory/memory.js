import './memory.css';
export function pintarMemory() {
  const memoryTable = document.querySelector(`#memoryTable`);

  memoryTable.innerHTML = "";
  const memoryPlayersDiv = document.querySelector(`#memoryPlayers`);
  const player1 = document.createElement("div");
  //const player2 = document.createElement("div");
  memoryPlayersDiv.append(player1);
  //memoryPlayersDiv.append(player2);
  player1.className = "player1 cursor-text";
  player1.id = "cursorText";
  //player2.className = "player2 cursor-text";
  player1.textContent = "Jugador 1";
  //player2.textContent = "Jugador 2";
  //<div id="cursorText" class="cursor-text">Tu Nombre</div>

}

