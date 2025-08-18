import './style.css'

function crearEstructuraPpal() {
  let appInfo = document.querySelector('#app');
  let gamesInfo = ["tresEnRaya", "laOca", "memory"];
  gamesInfo.forEach(e => {
    const game = document.createElement("section");
    game.id = e;
    appInfo.appendChild(game);
    const title = document.createElement("h2");
    title.className = `${e}Title`;
    game.appendChild(title);
    const gameContainer = document.createElement("div");
    const gameTable = document.createElement("div");
    gameTable.id = `${e}Table`;
    const gamePlayers = document.createElement("div");
    gamePlayers.id = `${e}Playersqqqqqqqqqqqqqqqqqqqq`;
    game.appendChild(gameContainer);
    gameContainer.appendChild(gameTable);
    gameContainer.appendChild(gamePlayers);
  });
};

crearEstructuraPpal()