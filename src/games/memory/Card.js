//import { createButton } from "./Button";
//import { currentPlayerMemory } from "../../main";
import "./Card.css";
import { currentPlayerMemory } from "./memory";
//let aVerQuienJuega;
//aVerQuienJuega = currentPlayerMemory;
// Color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// Número para colocación de cartas
export function getRandomPositionCard() {
  const positionCard = Math.floor(Math.random() * 20);
  let posicionesOcupadas = {};
  /*  if (posicionesOcupadas.includes(positionCard)) {
     getRandomPositionCard();
   }
   posicionesOcupadas.add(positionCard) */
  return `${positionCard}`;
}

// Función crear cartas
export function createCards(imagesList) {
  document.querySelector("#memoryTable").innerHTML = ` `;
  // Pinto todas las cartas
  //let posicionesOcupadas = {};
  imagesList.forEach(image => {
    let cardPositionID = getRandomPositionCard();
    let randomColorImg = getRandomColor();
    let divContainerCards = document.querySelector("#memoryTable");
    const cardDiv = document.createElement("div");
    cardDiv.id = cardPositionID;
    const imgImageDiv = document.createElement("img");
    cardDiv.className = "cardDiv";
    imgImageDiv.className = "imgImageDiv notSee";
    //console.log(image);
    imgImageDiv.id = image.id;
    imgImageDiv.src = image.urls.regular;
    imgImageDiv.alt = image.alt_description;
    imgImageDiv.loading = "lazy";
    imgImageDiv.style.borderColor = randomColorImg;
    divContainerCards.appendChild(cardDiv);
    const initialIconsBox = document.createElement("div");
    cardDiv.appendChild(imgImageDiv);
  });
  imagesList.forEach(image => {
    let randomColorImg = getRandomColor();
    let divContainerCards = document.querySelector("#memoryTable");
    const cardDiv = document.createElement("div");
    const imgImageDiv = document.createElement("img");
    cardDiv.className = "cardDiv";
    imgImageDiv.className = "imgImageDiv notSee";
    //console.log(image);
    imgImageDiv.id = image.id;
    imgImageDiv.src = image.urls.regular;
    imgImageDiv.alt = image.alt_description;
    imgImageDiv.loading = "lazy";
    imgImageDiv.style.borderColor = randomColorImg;
    divContainerCards.appendChild(cardDiv);
    const initialIconsBox = document.createElement("div");
    cardDiv.appendChild(imgImageDiv);
  });
  let allCardDivs = { cla: "0" };
  allCardDivs = document.querySelectorAll('.cardDiv');
  /*   function shuffleArray(mezclar) {
      mezclar.sort(() => Math.random() - 0.5);
    }
  
    shuffleArray(allCardDivs);
    console.log(allCardDivs); */

  /*  function fisherYatesShuffle(arr) {
 for (var i = arr.length - 1; i > 0; i--) {
   var j = Math.floor(Math.random() * (i + 1));  // random index
   [arr[i], arr[j]] = [arr[j], arr[i]];          // swap
 }
}

var tmpArray = [1, 3, 5];
fisherYatesShuffle(tmpArray);
console.log(tmpArray); */
  if (currentPlayerMemory == "player1") {
    console.log(`${currentPlayerMemory}1`);

    player1.textContent = "Jugador 11";

  } else if (currentPlayerMemory == "player2") {
    player1.textContent = "Jugador 2";

  }
  if (currentPlayerMemory = "player1") {
    console.log("es el player1");
    document.addEventListener('mousemove', (event) => {
      // Actualiza la posición del texto
      cursorText1.style.left = `${event.pageX}px`;
      cursorText1.style.top = `${event.pageY + 50}px`;
    });
    // Opcional: Mostrar/ocultar el texto al entrar/salir del área
    const zoneMemory = document.getElementById('memoryTable')
    zoneMemory.addEventListener('mouseenter', () => {
      cursorText1.style.display = 'block';
    });
    zoneMemory.addEventListener('mouseleave', () => {
      cursorText1.style.display = 'none';
    })
    //cursorText2.style.display = 'none';
  }
  //console.log("hola después");
  console.log("hola antes");
  //console.log(`${allCardDivs}`);
  console.log(allCardDivs);
  let aciertosPlayer1 = 0;
  let counterCards = 0;
  let idCard = 0;
  allCardDivs.forEach(cardClicked => {
    cardClicked.addEventListener('click', () => {
      //console.log("hola después");
      const imgCambioClase = cardClicked.querySelector('img');
      //console.log("hola después");
      if (imgCambioClase.className = 'imgImageDiv') {
        //console.log("hola");
        if (counterCards == 0) {
          //console.log(imgCambioClase);
          imgCambioClase.className = "imgImageDiv";
          counterCards++;
          //console.log(imgCambioClase.id);
          idCard = imgCambioClase.id;
        } else if (counterCards == 1) {
          imgCambioClase.className = "imgImageDiv";
          if (idCard == imgCambioClase.id) {
            //console.log(imgCambioClase);
            //console.log("mismo id");
            counterCards = 0;
            //console.log(counterCards);
            aciertosPlayer1++;
            //console.log(aciertosPlayer1);
          }
          else {
            imgCambioClase.className = "imgImageDiv";
            setTimeout(() => {
              //console.log(`${idCard} esta es`);
              imgCambioClase.className = 'imgImageDiv notSee';
              let paraOcultarCard = document.getElementById(`${idCard}`);
              //console.log(paraOcultarCard);
              paraOcultarCard.className = 'imgImageDiv notSee';
            }, 2000);
            counterCards = 0;
            console.log(currentPlayerMemory);

            if (currentPlayerMemory == "player1") {
              //console.log(currentPlayerMemory);
              currentPlayerMemory = "player2";
              //console.log(currentPlayerMemory);

            } else if (currentPlayerMemory == "player2") {
              //console.log(currentPlayerMemory);

              currentPlayerMemory = "player1";
              //console.log(currentPlayerMemory);

            }
          }
        }
      }

    });

  });



  // Pinchar en icono Pinterest para refrescar la búsqueda inicial de gatos
  // Selecciona el elemento que seguirá al cursor
  /* const cursorText1 = document.getElementById('cursorText1');
  const cursorText2 = document.getElementById('cursorText2'); */


  //if (currentPlayerMemory == "player1") {
  // Evento para mover el texto con el cursor
  /* else {
   console.log("es el player2");
   const memoryPlayersDiv = document.querySelector(`#memoryPlayers`);
   player1.textContent = "Jugador 2";
   const player2 = document.createElement("div");
   memoryPlayersDiv.append(player2);
   player2.className = "player2 cursor-text";
   player2.id = "cursorText2";
   player2.textContent = "Jugador 2";
   //} else {
   // Evento para mover el texto con el cursor
   document.addEventListener('mousemove', (event) => {
     // Actualiza la posición del texto
     cursorText2.style.left = `${event.pageX}px`;
     cursorText2.style.top = `${event.pageY + 50}px`;
   });
   // Opcional: Mostrar/ocultar el texto al entrar/salir del área
   //const zoneMemory = document.getElementById('memoryTable')
   zoneMemory.addEventListener('mouseenter', () => {
     cursorText2.style.display = 'block';
   });
   zoneMemory.addEventListener('mouseleave', () => {
     cursorText2.style.display = 'none';
   })
   //cursorText1.style.display = 'none';
   //}
   //console.log(currentPlayerMemory);
 } */

};
