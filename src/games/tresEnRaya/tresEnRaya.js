import './tresEnRaya.css';
export const printTresEnRaya = (tresEnRayaTable, arrayTresEnRaya) => {

  tresEnRayaTable.innerHTML = "";
  for (const fila of arrayTresEnRaya) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      divCasilla.className = "casilla";
      if (columna[0]) {
        divCasilla.className = "pieza";
      }
      divCasilla.style.background = columna.slice(1);
      tresEnRayaTable.append(divCasilla);
    }
  }

};