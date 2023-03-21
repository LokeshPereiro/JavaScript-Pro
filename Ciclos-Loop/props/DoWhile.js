//Cuando necesitamos ejecutar todas las funciones y/o condiciones definidas, se usan los ciclos.

const carros = ["Ford", "Mazada", "Honda", "Toyota"];
let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
//      i=i+1;
//     i++;
// }

//undefined
//null
//False
//Son condiciones falsas por lo que no dejarían ejecutar las funciones al no cumplir la condición principal
//Se sale del ciclo

while (carros[i]) {
  if (i === 1) {
    // break;
    // continue;
  }
  console.log(carros[i]);
  i++;
}

console.warn("Do While");

let j = 0;
