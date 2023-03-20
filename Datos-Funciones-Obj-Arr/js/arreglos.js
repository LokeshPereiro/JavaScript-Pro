//Arreglo con 10 elementos vacío
const arr = new Array(10);
// console.log(arr);

//Arreglo vacío (lo habitual)
const arr1 = [];

// coleccion de strings
let videojuegos = [
  "Mario 3",
  "Megaman",
  "Chrono Trigger",
  "CoD",
  "Battlefield",
];
// console.log(videojuegos);

//Quiero mostrar el primer juego
console.log(videojuegos[0]);

// multielementos
let arregloCosas = [
  true,
  123,
  "Lok",
  1 + 2,
  function () {},
  () => {},
  {
    a: 1,
  },
  ["X", "Megaman", "Zero", "Dr.Light", ["Dr.Willy", "Woodman"]],
];

//Mostrar Dr.Light
console.table(arregloCosas);
console.log(arregloCosas[7][4][1]);
