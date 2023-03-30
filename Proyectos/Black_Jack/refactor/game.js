const start = (() => {
  ("use strict");

  let deck = [];
  // Optimizacion: Si hay dos variables del mismo tipo podemos obviar el siguiete a través de 'una coma'
  const tipos = ["C", "D", "H", "S"],
    losReyes = ["J", "Q", "K", "A"];

  let playersPoints = [];

  const newBtn = document.querySelector("#btnNew"),
    askBtn = document.querySelector("#btnAsk"),
    stopBtn = document.querySelector("#btnStop");

  const scoresHtml = document.querySelectorAll("small"),
    divCartas = document.querySelectorAll(".divCartas");

  //  "------ Funcion iniciadora del juego ------";
  const initGame = (numPlayers = 2) => {
    deck = createDeck();
    playersPoints = [];
    // El último jugador siempre va a ser el CPU
    for (let i = 0; i < numPlayers; i++) {
      playersPoints.push(0);
    }
    scoresHtml.forEach((ele) => (ele.innerText = 0));
    divCartas.forEach((ele) => (ele.innerText = ""));

    askBtn.disabled = false;
    stopBtn.disabled = false;
  };

  //  "------ Create Cards Deck/Baraja ------";
  const createDeck = () => {
    // Esta función solo se debería de ocupar en crear la deck y hacer el return del deck mezclado
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (const tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (const reyes of losReyes) {
      for (const tipo of tipos) {
        deck.push(reyes + tipo);
      }
    }
    return _.shuffle(deck);
  };

  // ----------- ----------- ----------- ----------- //

  console.warn("------ Ask Card ------");
  const askCard = () => {
    if (deck.length === 0) {
      throw "Lo siento, no hay cartas en la baraja!";
    }
    return deck.pop();
  };

  // ----------- ----------- ----------- ----------- //

  console.warn("------ Card Value ------");
  const askedCardValue = (card) => {
    const valor = card.substring(0, card.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  // ----------- ----------- ----------- ----------- //
  //   turno: 0 player, turno: 1 CPU
  //   Pido la carta como args
  const acumularPuntos = (carta, turno) => {
    playersPoints[turno] = playersPoints[turno] + askedCardValue(carta);
    scoresHtml[turno].innerText = playersPoints[turno];
    return playersPoints[turno];
  };

  //   Necesito saber que carta tengo que enseñar y de quien es el turno
  const crearCartas = (carta, turno) => {
    const imgCards = document.createElement("img");
    imgCards.src = `assets/cartas/${carta}.png`;
    imgCards.classList.add("cartas");
    divCartas[turno].append(imgCards);
  };

  const ganadorJuego = () => {
    const [puntosMinimos, puntosCPU] = playersPoints;

    setTimeout(() => {
      if (puntosCPU === puntosMinimos) {
        alert("Wow! hay empate!");
      } else if (puntosMinimos > 21) {
        alert("Opps! Superaste los 21!");
      } else if (puntosCPU > 21) {
        alert("Felicidades, has ganado!!");
      } else {
        alert("Gana CPU!");
      }
    }, 100);
  };

  const turnoCPU = (puntosMinimos) => {
    let puntosCPU = 0;
    do {
      const carta = askCard();
      //  playersPoints.length - 1 ya que el último jugador es el CPU
      const turnCPU = playersPoints.length - 1;

      puntosCPU = acumularPuntos(carta, turnCPU);

      crearCartas(carta, turnCPU);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosCPU < puntosMinimos && puntosMinimos <= 21);

    ganadorJuego();
  };

  console.warn("------ Eventos DOM ------");
  askBtn.addEventListener("click", () => {
    const carta = askCard();
    const puntosJugador = acumularPuntos(carta, 0);

    crearCartas(carta, 0);

    if (puntosJugador > 21) {
      askBtn.disabled = true;
      stopBtn.disabled = true;
      turnoCPU(puntosJugador);
    } else if (puntosJugador === 21) {
      askBtn.disabled = true;
      stopBtn.disabled = true;
      alert("Felicidades, 21!");
    }
  });

  // newGame, Stop
  stopBtn.addEventListener("click", () => {
    askBtn.disabled = true;
    stopBtn.disabled = true;
    turnoCPU(playersPoints[0]);
  });

  // Exporto esta acción con el modulo en el index.html

  //   newBtn.addEventListener("click", () => {
  //     initGame();
  //   });

  return {
    newGame: initGame,
  };
})();
