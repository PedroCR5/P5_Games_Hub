import './structure.css'
export function crearEstructuraPpal() {
  let appInfo = document.querySelector('#app');
  appInfo.innerHTML = "";
  const navGames = document.createElement("nav");
  appInfo.append(navGames);
  const titleNav = document.createElement("h1");
  navGames.append(titleNav);
  titleNav.innerText = "Games Hub";
  titleNav.id = "titleNav";
  const pNav = document.createElement("p");
  navGames.append(pNav);
  pNav.innerText = "Aquí están tus juegos favoritos, elige a cual quieres jugar.";
  const divNav = document.createElement("div");
  divNav.id = "divNav";
  navGames.append(divNav);
  let gamesInfo = ["tresEnRaya", "laOca", "memory"];
  gamesInfo.forEach(e => {
    const divGameDiv = document.createElement("div");
    const divGame = document.createElement("button");
    const divGameImg = document.createElement("img");
    divGameDiv.className = "divNavGames";
    divGame.id = `${e}Select`;
    divGameImg.id = `${e}SelectImg`;
    divGame.className = `buttonNavGames`;
    divGameImg.className = `imgNavGames`;
    divNav.append(divGameDiv);
    divGameDiv.append(divGame);
    divGameDiv.append(divGameImg);
    divGame.textContent = `${e}`
    const game = document.createElement("section");
    game.id = e;
    appInfo.appendChild(game);
    const volverAlNav = document.createElement("button");
    volverAlNav.innerHTML = "Volver a la pantalla principal y jugar a otro juego";
    volverAlNav.id = `${e}ReturnToNav`;
    volverAlNav.className = `returnToNav`;
    game.append(volverAlNav);
    const title = document.createElement("h2");
    title.className = `gameTitle`;
    title.id = `${e}Title`;
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
  const tresEnRayaSelectGame = document.getElementById("tresEnRayaSelect");
  tresEnRayaSelectGame.innerText = "Jugar al tres en raya";
  const tresEnRayaSelectGameImg = document.getElementById("tresEnRayaSelectImg");
  tresEnRayaSelectGameImg.src = `assets/TresEnRayaFoto.png`;
  const laOcaSelectGame = document.getElementById("laOcaSelect");
  laOcaSelectGame.innerText = "Jugar a la Oca";
  const laOcaSelectGameImg = document.getElementById("laOcaSelectImg");
  laOcaSelectGameImg.src = `assets/OcaFoto.png`;
  const memorySelectGame = document.getElementById("memorySelect");
  memorySelectGame.innerText = "Jugar al memory";
  const memorySelectGameImg = document.getElementById("memorySelectImg");
  memorySelectGameImg.src = `assets/MemoryFoto.png`;
  const tresEnRayaTitleGame = document.getElementById("tresEnRayaTitle");
  tresEnRayaTitleGame.innerText = "JUGAR AL TRES EN RAYA";
  const laOcaTitle = document.getElementById("laOcaTitle");
  laOcaTitle.innerText = "JUGAR A LA OCA";
  const memoryTitle = document.getElementById("memoryTitle");
  memoryTitle.innerText = "JUGAR AL MEMORY";

};