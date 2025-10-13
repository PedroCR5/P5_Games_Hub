import './memory.css';
export let currentPlayerMemory = "player1";

export function pintarMemory() {
  const memoryTable = document.querySelector(`#memoryTable`);

  memoryTable.innerHTML = "";
  const memoryPlayersDiv = document.querySelector(`#memoryPlayers`);
  const player1 = document.createElement("div");
  memoryPlayersDiv.append(player1);
  player1.className = "player1 cursor-text";
  player1.id = "cursorText1";


  //<div id="cursorText" class="cursor-text">Tu Nombre</div>

}

