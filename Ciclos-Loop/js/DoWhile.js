//Cuando necesitamos ejecutar todas las funciones y/o condiciones definidas, se usan los ciclos.

const carros = ["Ford", "Mazada", "Honda", "Toyota"];
let i = 0;

// Parecido a ifelse, switch..
// condición verdadera ()
// while (i < carros.length) {
//   console.log(carros[i]);
//   // i = i + 1;
//   // Una vuelta/impresión por elementos
//   i++;
// }

//undefined
//null
//False
//Son condiciones falsas por lo que no dejarían ejecutar las funciones al no cumplir la [ condición verdadera ]

while (carros[i]) {
  if (i === 1) {
    // break;
    // Es necesario sino caemos en el bucle infinito
    i++;
    continue;
    // Ahora salta la posición 1
  }
  console.log(carros[i]);
  i++;
}

console.warn("Do While");
let j = 3;
// Do siempre se ejecuta, al menos una vez, siempre y cuando while sea verdadero
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
