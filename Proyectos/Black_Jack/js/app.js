// Possibles tipos de cartas
/*
- 2C = 2 of Clubs (2 de Treboles);
- 2D = 2 of Diamonds (2 de Diamantes);
- 2C = 2 of Heart (2 de Corazones);
- 2C = 2 of Spades (2 de Pica/Espada);
*/
const tipos = ["C", "D", "H", "S"];
const losReyes = ["J", "Q", "K", "A"];
let deck = [];
//Leer todas las cartas de la baja para meterlos en un arreglo
const createDeck = () => {
  /*
    1. Cartas Numéricas van de 2 al 10 
    2. Cartas de 'Los Reyes' [ J, Q, K, A ]
    */
  //    Podríamos haber ejectado 4 ciclos 'for' para cada tipo de carta, pero el 'forof' permite ahorrar esa repetición de codigo
  for (let i = 2; i <= 10; i++) {
    // deck.push(i + "C");
    for (const tipo of tipos) {
      // 1º obtengo todas las cartas numéricas
      //   Luego le concateno el tipo, es decir, haciendolo coicidir con el nombre
      deck.push(i + tipo);
    }
    for (const tipo of tipos) {
      for (const reyes of losReyes) {
        deck.push(reyes + tipo);
      }
    }
  }
  console.log(deck);
};
createDeck();
