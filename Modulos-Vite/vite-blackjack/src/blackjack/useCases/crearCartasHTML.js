/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} img de la carta
 */
export const crearCartasHTML = (carta) => {
  if (!carta) throw new Error("La carta es obligatorio..");
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
