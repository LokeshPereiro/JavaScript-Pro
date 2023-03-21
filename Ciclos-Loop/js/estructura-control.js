//Las estructuras del control nos permiten romper la estructura ejecución secuencial de JavaScript.  Si paso esto haz esto..

//IF-Else
let a = 5;

// if (a > 10) {
//   console.log("A es mayor que 10");
// } else {
//   console.log("A es menor que 10");
// }

//Fecha actual
const hoy = new Date();

//Día actual indexado
let dia = hoy.getDay(); //0:Domingo, 1:Lunes, 2:.Martes
console.log({
  hoy,
  dia,
});

if (dia === 0) {
  console.log("Es Domingo");
} else {
  console.log("Hoy no es Domingo");
}
//  con 1x = asignación
// Con 2x == estamos comprando los datos, pues JS entiende que los datos son meramente 'String'
//Con 3x ===, es más estricto y toma en cuenta los datos

// Ejercio
//Sin usar If else, While, únicamente con objetos y arreglos mostrar los dias de la semana

let diaSemana = 4;

//Con objetos
const losDiasObj = {
  // Los obj necesitan llave valor
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};
// console.log(losDias[diaSemana] || "Día de la semana no definido");

//Con Arreglo
const losDiasArr = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
console.log(losDiasArr[diaSemana] || "Día de la semana no definido");

// const diasLetras = [
//   () => "Domingo - 0",
//   () => "Lunes - 1",
//   () => "Martes - 2",
//   () => "Miercoles - 3",
//   () => "Jueves - 4",
//   () => "Viernes - 5",
//   () => "Sabado - 6",
// ];
// console.log(diasLetras[diaSemana]() || "Día de la semana no definido");
