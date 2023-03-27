/*
 - horaApertura: Dias de la semana a las 11:00,
 - horaApertura: Findes a las 9:00
 */

//Creamos esa condición de la tienda
const dia = 6;
const horaActual = 10;

let horaApertura;
let mensaje;

//1era OPCION
// Comprobar el día
if (dia === 0 || dia === 6) {
  console.log("Es **Fin de Semana**");
  //   horaApertura = 9;
} else {
  console.log("~Dia de la Semana~");
  //   horaApertura = 11;
}

// Comprobar la  hora
// if (horaActual >= horaApertura) {
//   mensaje = "Estamos abiertos";
// } else {
//   mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }
// console.log(mensaje);

// ---------------------  2ª OPCION, Operador Ternario    ------------------
horaApertura = [0, 6].includes(dia) ? 9 : 11;
mensaje =
  horaActual >= horaApertura
    ? "Estamos abiertos"
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;
console.log(mensaje);

// ---------------------- PRO ternario ----------------------

// const elMayor = (a, b) => {
//     return (a > b) ? a : b;
// }

//2nd Opcion
const elMayor = (a, b) =>
  a > b ? `soy Mayor que B: ${a}` : `soy Mayor que A: ${b}`;

const esMiembro = (miembro) => (miembro ? "pagar 5€" : "pagar 25€");

console.log(elMayor(15, 12));
console.log(esMiembro(false));

//Crear arreglos o objetos con una condicion implícita
const amigo = true;
const amigosArr = [
  "Pepe",
  "Chanchito",
  "Jaimito",
  amigo ? "Good Bunny" : "Bad Bunny",
  //Se trata de una funcion Anónima-AutoDeclarada
  (() => "Indiana Jones")(),
  elMayor(30, 25),
];
console.log(amigosArr);

const nota = 88; //A+ B+ C+
const puntuacion =
  nota >= 95
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 80
    ? "B"
    : nota >= 70
    ? "C+"
    : nota >= 70
    ? "C"
    : "F";

console.log({ nota, puntuacion });
