// Posibles tipos de cartas
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
/*
    1. Cartas Numéricas van de 2 al 10 
    2. Cartas de 'Los Reyes' [ J, Q, K, A ]
*/

const newBtn = document.querySelector("#btnNew");
const askBtn = document.querySelector("#btnAsk");
const stopBtn = document.querySelector("#btnStop");
const scoresHtml = document.querySelectorAll("small");
const displayinPlayerCards = document.querySelector("#player-cards");
const displayinCPUCards = document.querySelector("#computer-cards");

let puntosJugador = 0,
  puntosCPU = 0;

console.warn("------ Create Cards Deck/Baraja ------");
const createDeck = () => {
  // Podríamos haber ejectado 4 ciclos 'for' para cada tipo de carta, pero el 'forof' permite ahorrar esa repetición de codigo
  for (let i = 2; i <= 10; i++) {
    // deck.push(i + "C");
    for (const tipo of tipos) {
      // 1º obtengo todas las cartas numéricas
      // Luego le concateno el tipo, es decir, hago coicidir con el nombre de la carta
      deck.push(i + tipo);
    }
  }
  // Hago lo mismo con las cartas de los reyes
  for (const reyes of losReyes) {
    for (const tipo of tipos) {
      deck.push(reyes + tipo);
    }
  }
  // _.shuffle importar del underscore
  deck = _.shuffle(deck);
  console.log(deck);
};
createDeck();

console.warn("------ Ask Card ------");
const askCard = () => {
  // el método del arr .pop() me permite eliminar el último elemento y devolver ese elemento
  if (deck.length === 0) {
    throw "Lo siento, no hay más cartas en la baraja!";
  }
  const card = deck.pop();
  // console.log(deck);
  // console.log(card);
  return card;
};
/*
// ## Comprobando el 'throw error' cuando no tenemos ninguna carta en el deck

//Op.1 Reasignar el deck como arr vacio
// deck = [];

// Op.2
for (i = 0; i <= 55; i++) {
  // Va piediendo cartas 1 by 1 hasta que se vacía el deck
  askCard();
}


*/

console.warn("------ Card Value ------");
const askedCardValue = (card) => {
  // JS me permite trabjar todas las string como arreglos, o sea,  zero-based index
  // Con el método substring puedo especificar desde y hasta donde quiero cortar una palabra y, devolver ese recorte
  const valor = card.substring(0, card.length - 1); //que recorte desde la posición 0 teniendo en cuenta el largo de la carta sin tener en cuanta la última letra y/o caracter

  // let valorCarta = 0;
  // if (isNaN(valor)) {
  //   console.log("No es un número!");
  //   // En blackjack el AS vale 11, minetras que los otros 10
  //   valorCarta = valor === "A" ? 11 : 10;
  // } else {
  //   console.log("Es un número");
  //   valorCarta = valor * 1;
  // }

  // console.log(valorCarta);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

// const currCardValue = askedCardValue("4D");

// ----------- ----------- ----------- ----------- //

const turnoCPU = (puntosMinimos) => {
  /*
  - El CPU tiene que pedir al menos una vez una carta para superarme
  - Tiene como mision hacerme perder
  */
  do {
    const carta = askCard();
    puntosCPU = puntosCPU + askedCardValue(carta);
    // scoresHtml[0] pq hay dos smalls
    scoresHtml[1].innerText = puntosCPU;
    // Enseñar las cartas que han salido en la pantalla
    const imgCards = document.createElement("img");
    imgCards.src = `assets/cartas/${carta}.png`;
    imgCards.classList.add("cartas");
    displayinCPUCards.append(imgCards);

    // Si superamos los 21, el cpu solo tiene sacar una carta para ganar no tiene sentido que el ciclo se repita varias veces
    if (puntosMinimos > 21) {
      break;
    }
    // # while: el CUP tendra que sacar una carta más si sus puntos son menores que el jugador
    // Por otro lado, los puntosMinimos a superar serán los 21, no más.
  } while (puntosCPU < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosCPU === puntosMinimos) {
      alert("Wow! hay empate!");
    } else if (puntosMinimos > 21) {
      alert("Opps! Superaste los 21!");
    } else if (puntosCPU > 21) {
      alert("Felicidades, has ganado!!");
    } else if (puntosCPU === 21) {
      alert("CPU Gana!");
    } else if (puntosCPU > puntosMinimos) {
      alert("Tienes menos puntos que el CPU");
    }
  }, 100);
};

console.warn("------ Eventos DOM ------");
askBtn.addEventListener("click", () => {
  // La funcion de askCard hace el return de la carta
  const carta = askCard();
  //Jugador vs CPU puntos acumulados
  puntosJugador = puntosJugador + askedCardValue(carta);
  // scoresHtml[0] pq hay dos smalls
  scoresHtml[0].innerText = puntosJugador;
  // Enseñar las cartas que han salido en la pantalla
  const imgCards = document.createElement("img");
  imgCards.src = `assets/cartas/${carta}.png`;
  imgCards.classList.add("cartas");
  displayinPlayerCards.append(imgCards);

  if (puntosJugador > 21) {
    turnoCPU(puntosJugador);
    askBtn.disabled = true;
    stopBtn.disabled = true;
  } else if (puntosJugador === 21) {
    alert("Felicidades, 21!");
    askBtn.disabled = true;
    stopBtn.disabled = true;
  }
});
// turnoCPU(15);

stopBtn.addEventListener("click", () => {
  askBtn.disabled = true;
  stopBtn.disabled = true;
  turnoCPU(puntosJugador);
});

newBtn.addEventListener("click", () => {
  // Llamo de nuevo la funcion de crear nuevo deck porque me da un deck nuevo mezclado
  deck = [];

  deck = createDeck();
  puntosCPU = 0;
  puntosJugador = 0;

  scoresHtml[0].innerText = 0;
  scoresHtml[1].innerText = 0;

  displayinCPUCards.innerHTML = "";
  displayinPlayerCards.innerHTML = "";

  askBtn.disabled = false;
  stopBtn.disabled = false;
});
