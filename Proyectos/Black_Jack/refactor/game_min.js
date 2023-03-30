const start = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    a = ["J", "Q", "K", "A"],
    l = [];
  document.querySelector("#btnNew");
  let r = document.querySelector("#btnAsk"),
    s = document.querySelector("#btnStop"),
    n = document.querySelectorAll("small"),
    d = document.querySelectorAll(".divCartas"),
    i = (t = 2) => {
      (e = o()), (l = []);
      for (let a = 0; a < t; a++) l.push(0);
      n.forEach((e) => (e.innerText = 0)),
        d.forEach((e) => (e.innerText = "")),
        (r.disabled = !1),
        (s.disabled = !1);
    },
    o = () => {
      e = [];
      for (let l = 2; l <= 10; l++) for (let r of t) e.push(l + r);
      for (let s of a) for (let n of t) e.push(s + n);
      return _.shuffle(e);
    };
  let c = () => {
    if (0 === e.length) throw "Lo siento, no hay cartas en la baraja!";
    return e.pop();
  };
  let $ = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
    },
    u = (e, t) => ((l[t] = l[t] + $(e)), (n[t].innerText = l[t]), l[t]),
    b = (e, t) => {
      let a = document.createElement("img");
      (a.src = `assets/cartas/${e}.png`),
        a.classList.add("cartas"),
        d[t].append(a);
    },
    f = () => {
      let [e, t] = l;
      setTimeout(() => {
        t === e
          ? alert("Wow! hay empate!")
          : e > 21
          ? alert("Opps! Superaste los 21!")
          : t > 21
          ? alert("Felicidades, has ganado!!")
          : alert("Gana CPU!");
      }, 100);
    },
    h = (e) => {
      let t = 0;
      do {
        let a = c(),
          r = l.length - 1;
        if (((t = u(a, r)), b(a, r), e > 21)) break;
      } while (t < e && e <= 21);
      f();
    };
  return (
    r.addEventListener("click", () => {
      let e = c(),
        t = u(e, 0);
      b(e, 0),
        t > 21
          ? ((r.disabled = !0), (s.disabled = !0), h(t))
          : 21 === t &&
            ((r.disabled = !0), (s.disabled = !0), alert("Felicidades, 21!"));
    }),
    s.addEventListener("click", () => {
      (r.disabled = !0), (s.disabled = !0), h(l[0]);
    }),
    { newGame: i }
  );
})();
