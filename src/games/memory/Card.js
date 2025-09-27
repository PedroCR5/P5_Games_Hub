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
    imgImageDiv.className = "imgImageDiv";
    console.log(image);
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
    imgImageDiv.className = "imgImageDiv";
    console.log(image);
    imgImageDiv.src = image.urls.regular;
    imgImageDiv.alt = image.alt_description;
    imgImageDiv.loading = "lazy";
    imgImageDiv.style.borderColor = randomColorImg;
    divContainerCards.appendChild(cardDiv);
    const initialIconsBox = document.createElement("div");
    cardDiv.appendChild(imgImageDiv);
  });
}