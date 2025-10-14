import './memory.css';

export function pintarMemory() {
  const memoryTable = document.querySelector(`#memoryTable`);

  memoryTable.innerHTML = "";
  const memoryPlayersDiv = document.querySelector(`#memoryPlayers`);
  const player1 = document.createElement("div");
  memoryPlayersDiv.append(player1);
  player1.className = "player1 cursor-text";
  player1.id = "cursorText1";
  player1.innerText = "Jugador 1";
  const player2 = document.createElement("div");
  memoryPlayersDiv.append(player2);
  player2.className = "notPlayer";
  player2.id = "cursorText2";
  player2.innerText = "Jugador 2";


  //<div id="cursorText" class="cursor-text">Tu Nombre</div>

}

