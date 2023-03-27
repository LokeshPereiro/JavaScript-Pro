// Estructura Cíclica
// Cuando necesitamos ejecutar todas las funciones y/o condiciones definidas, se usan los ciclos.

const coches = ["Seat", "Cupra", "Ibiza", "Leon"];
let i = 0;

// Parecido a if else, switch..
// condición verdadera ()

//undefined
//null
//False

// while (i < coches.length) {
//   console.log(coches[i]);
//   // i = i + 1;
//   // Una vuelta/impresión por elementos
//   i++;
// }

while (coches[i]) {
  // if (i === 1) {
  //   // break;
  //   // Es necesario sino caemos en el bucle infinito
  //   i++;
  //   continue;
  //   // Ahora salta la posición 1 --> cupra
  // }
  console.log(coches[i]);
  i++;
}

console.warn("Do While");
let j = 2;
// Do siempre se ejecuta, al menos una vez (e.g. undefined), siempre y cuando while sea verdadero
do {
  console.log(coches[j]);
  j++;
} while (coches[j]);
