import "./Card.css";
let currentPlayerMemory = "player1";
/* function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
} */
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
  imagesList.forEach(image => {
    let cardPositionID = getRandomPositionCard();
    //let randomColorImg = getRandomColor();
    let divContainerCards = document.querySelector("#memoryTable");
    const cardDiv = document.createElement("div");
    cardDiv.id = cardPositionID;
    const imgImageDiv = document.createElement("img");
    cardDiv.className = "cardDiv";
    imgImageDiv.className = "imgImageDiv notSee";
    imgImageDiv.id = image.id;
    imgImageDiv.src = image.urls.regular;
    imgImageDiv.alt = image.alt_description;
    imgImageDiv.loading = "lazy";
    //imgImageDiv.style.borderColor = randomColorImg;
    divContainerCards.appendChild(cardDiv);
    cardDiv.appendChild(imgImageDiv);
  });
  imagesList.forEach(image => {
    //let randomColorImg = getRandomColor();
    let divContainerCards = document.querySelector("#memoryTable");
    const cardDiv = document.createElement("div");
    const imgImageDiv = document.createElement("img");
    cardDiv.className = "cardDiv";
    imgImageDiv.className = "imgImageDiv notSee";
    imgImageDiv.id = image.id;
    imgImageDiv.src = image.urls.regular;
    imgImageDiv.alt = image.alt_description;
    imgImageDiv.loading = "lazy";
    //imgImageDiv.style.borderColor = randomColorImg;
    divContainerCards.appendChild(cardDiv);
    cardDiv.appendChild(imgImageDiv);
  });
  //Meto todas las cartas en allCardDivs
  let allCardDivs = { cla: "0" };
  allCardDivs = document.querySelectorAll('.cardDiv');
  console.log(allCardDivs);



  //Cursor con Jugador 1 al inicio
  document.addEventListener('mousemove', (event) => {
    // Jugador 1 sigue al cursor
    cursorText1.style.left = `${event.pageX}px`;
    cursorText1.style.top = `${event.pageY + 50}px`;
  });
  // Jugador 1 del cursor solo cuando el cursor está en el tablero
  const zoneMemory = document.getElementById('memoryTable')
  zoneMemory.addEventListener('mouseenter', () => {
    cursorText1.style.display = 'block';
  });
  zoneMemory.addEventListener('mouseleave', () => {
    cursorText1.style.display = 'none';
  })
  //Variables para contabilizar aciertos
  let aciertosPlayer1 = 0;
  let aciertosPlayer2 = 0;
  let counterCards = 0;
  let idCard = 0;
  //Cuando se hace click en una carta ejecuto unas cuantas cosas
  allCardDivs.forEach(cardClicked => {
    cardClicked.addEventListener('click', () => {
      const imgCambioClase = cardClicked.querySelector('img');
      const el1 = document.getElementById("cursorText1");
      const el2 = document.getElementById("cursorText2");
      if (imgCambioClase.className = 'imgImageDiv') {
        //Verificamos si es la primera carta que se levanta (counterCards=0) o la segunda (counterCards=1)
        if (counterCards == 0) {
          imgCambioClase.className = "imgImageDiv";
          counterCards++;
          idCard = imgCambioClase.id;
        } else if (counterCards == 1) {
          imgCambioClase.className = "imgImageDiv";
          //Si las dos cartas son iguales reseteamos el counterCards y sumamos un acierto al jugador.
          if (idCard == imgCambioClase.id) {
            counterCards = 0;
            //Sumamos el acierto al jugador correspondiente
            if (currentPlayerMemory == "player1") {
              aciertosPlayer1++;
            } else if (currentPlayerMemory == "player2") {
              aciertosPlayer2++;
            }
            console.log(aciertosPlayer1);
            console.log(aciertosPlayer2);
            //Comprobamos si el juego se acaba y quien gana
            if (aciertosPlayer1 + aciertosPlayer2 == 10) {
              console.log("Juego acabado");
              if (aciertosPlayer1 > aciertosPlayer2) {
                console.log("Gana el jugador 1");
              } else if (aciertosPlayer1 < aciertosPlayer2) {
                console.log("Gana el jugador 2");
              } else {
                console.log("Empate");
              }
            };
          }
          //Si no hay acierto, damos la vuelta a las cartas a los 2 segundos
          else {
            imgCambioClase.className = "imgImageDiv";
            setTimeout(() => {
              imgCambioClase.className = 'imgImageDiv notSee';
              let paraOcultarCard = document.getElementById(`${idCard}`);
              paraOcultarCard.className = 'imgImageDiv notSee';
              //Cambiamos el turno al jugador 2
              if (currentPlayerMemory == "player1") {
                currentPlayerMemory = "player2";
                el1.className = "notPlayer";
                el2.className = "player2 cursor-text";
              } else {
                //Cambiamos el turno al jugador 1
                currentPlayerMemory = "player1";
                el2.className = "notPlayer";
                el1.className = "player1 cursor-text";
              }
              //Esto es para que Jugador 1 esté con el cursor solo cuando el cursor está en el tablero.
              if (currentPlayerMemory == "player1") {
                console.log("es el player1");
                document.addEventListener('mousemove', (event) => {
                  cursorText1.style.left = `${event.pageX}px`;
                  cursorText1.style.top = `${event.pageY + 50}px`;
                });
                const zoneMemory = document.getElementById('memoryTable')
                zoneMemory.addEventListener('mouseenter', () => {
                  cursorText1.style.display = 'block';
                });
                zoneMemory.addEventListener('mouseleave', () => {
                  cursorText1.style.display = 'none';
                })
              } else if (currentPlayerMemory == "player2") {
                //Esto es para que Jugador 1 esté con el cursor solo cuando el cursor está en el tablero.
                console.log("es el player2");
                document.addEventListener('mousemove', (event) => {
                  cursorText2.style.left = `${event.pageX}px`;
                  cursorText2.style.top = `${event.pageY + 50}px`;
                });
                const zoneMemory = document.getElementById('memoryTable')
                zoneMemory.addEventListener('mouseenter', () => {
                  cursorText2.style.display = 'block';
                });
                zoneMemory.addEventListener('mouseleave', () => {
                  cursorText2.style.display = 'none';
                })
              }
            }, 2000);
            // Reseteamos el contador de cartas
            counterCards = 0;
          }
        }
      }


    });

  });
};
