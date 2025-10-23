import './structure.css'
export function crearEstructuraPpal() {
  let appInfo = document.querySelector('#app');
  const navGames = document.createElement("nav");
  appInfo.append(navGames);
  let gamesInfo = ["tresEnRaya", "laOca", "memory"];
  gamesInfo.forEach(e => {
    const divGame = document.createElement("button");
    divGame.id = `${e}Select`;
    divGame.className = `buttonNavGames`;
    navGames.append(divGame);
    divGame.textContent = `${e}`
    const game = document.createElement("section");
    game.id = e;
    appInfo.appendChild(game);
    const title = document.createElement("h2");
    title.className = `${e}Title`;
    title.textContent = `${e}`;
    game.appendChild(title);
    const gameContainer = document.createElement("div");
    gameContainer.id = `${e}Container`;
    const gameTable = document.createElement("div");
    gameTable.id = `${e}Table`;
    const gamePlayers = document.createElement("div");
    gamePlayers.id = `${e}Players`;
    game.appendChild(gameContainer);
    gameContainer.appendChild(gameTable);
    gameContainer.appendChild(gamePlayers);
  });
};