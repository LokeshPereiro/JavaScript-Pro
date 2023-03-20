// console.error(), console.warn(), console.table();

let a = 10,
  b = 30,
  c = "Hola ",
  d = "Spiderman",
  x = a + b;

const saludo = c + d;
console.log("%c Mis Variables", "color:blue; font-weight:bold");
console.log("a", a);
console.log("b", b);
console.log("x", x);
console.log("d", d);

c = "Hola de nuevo";

// .table puede recibir {} o []
console.table([a, b, c, d, x]);
