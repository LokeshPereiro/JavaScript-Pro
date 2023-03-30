(() => {
  ("use strict");

  const tipos = ["C", "D", "H", "S"];
  const losReyes = ["J", "Q", "K", "A"];
  let deck = [];

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
    for (let i = 2; i <= 10; i++) {
      // deck.push(i + "C");
      for (const tipo of tipos) {
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

    return card;
  };

  console.warn("------ Card Value ------");
  const askedCardValue = (card) => {
    const valor = card.substring(0, card.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  // ----------- ----------- ----------- ----------- //

  const turnoCPU = (puntosMinimos) => {
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

      if (puntosMinimos > 21) {
        break;
      }
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
})();
