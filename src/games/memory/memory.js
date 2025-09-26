import './memory.css';
export function pintarMemory() {
  const memoryTable = document.querySelector(`#memoryTable`);

  memoryTable.innerHTML = "";
  const memoryPlayersDiv = document.querySelector(`#memoryPlayers`);
  const player1 = document.createElement("button");
  const player2 = document.createElement("button");
  memoryPlayersDiv.append(player1);
  memoryPlayersDiv.append(player2);
  player1.className = "player1";
  player2.className = "player2";
  player1.textContent = "Jugador 1";
  player2.textContent = "Jugador 2";
}

