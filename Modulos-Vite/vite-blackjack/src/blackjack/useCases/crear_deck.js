import _ from "underscore";

// Esta función crea un nuevo deck
// BetterCommit extension for arguments and type of data retriving
/**
 *
 * @param {Array<String>} tiposCarta Example: ["C", "D", "H", "S"];
 * @param {Array<String>} tiposEspeciales Example: ["A", "J", "Q", "K"];
 * @returns {Array<String>} devuleve un nuevo deck de cartas
 */

export const crearDeck = (tiposCarta, tiposEspeciales) => {
  if (!tiposCarta || tiposCarta.length === 0)
    throw new Error(
      "Los tiposCarta y/o el arreglo de string son obligatorios!"
    );

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error(
      "Los tiposEspeciales y/o el arreglo de string son obligatorios!"
    );

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  //   console.log(deck);
  return deck;
};
