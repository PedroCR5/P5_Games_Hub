import { createCards } from "./Card";
import { endPoint, accesKey } from "../../main";
export let imagesList = {};

// Traigo la info de la API y llamo a Card.js para pintar las Cards.
export async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;
  console.log(imagesList);
  function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array;
  }


  const shuffledArray = fisherYatesShuffle(imagesList);

  console.log(shuffledArray);

  //Si no se encuentra ningún resultado, pintamos resultado de gatos y ejecutamos el aviso.
  //Pero ahora siempre se envía un resultado desde la API se escriba lo que se escriba.
  if (imagesList.length === 0) {
    const modalNotification = document.getElementById('notification');
    modalNotification.style.display = 'flex';
    getImages('dog');
  }
  //Si hay algún resultado creamos las cartas.
  else {
    createCards(shuffledArray);
  }
}
