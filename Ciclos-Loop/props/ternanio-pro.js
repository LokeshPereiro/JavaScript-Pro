// const elMayor = (a, b) => {
//     return (a > b) ? a : b;
// }

//2nd Opcion
const elMayor = (a, b) => (a > b ? a : b);

const esMiembro = (miembro) => (miembro ? "2$ a pagar" : "10$ a pagar");

console.log(elMayor(30, 15));
console.log(esMiembro(false));

//Crear arreglos o objetos con una condicion implícita
const amigo = false;
const amigosArrr = [
  "Peter",
  "Tony",
  "Dr.Strange",
  amigo ? "Thor" : "Loki",
  //Se trata de una funcion Anónima-AutoDeclarada
  (() => "Indiana Jones")(),
  elMayor(30, 15),
];
console.log(amigosArrr);

const nota = 60; //A+ B+ C+
const grado =
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

console.log({ nota, grado });
