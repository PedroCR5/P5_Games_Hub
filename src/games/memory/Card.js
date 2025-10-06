//import { createButton } from "./Button";
import "./Card.css";
// Color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// Función crear cartas
export function createCards(imagesList) {
  document.querySelector("#memoryTable").innerHTML = ` `;
  // Pinto todas las cartas
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
          console.log(aciertosPlayer1);

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
        }
      }
    })
  })
};
