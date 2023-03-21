//Hasta ahora vimos una estructura de ejecución secuencial, una detras de otra
//las estructuras del control nos permiten romper esa estructura secuenciall

//IF-Else
let a = 5;

if (a > 10) {
  console.log("A es mayor que 10");
}

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
// Con 2x == estamos comprando los datos, pues JS entiende que los datos son meramente 'String'
//Con 3x ===, es más estricto y toma en cuenta los datos

// Ejercio
//Sin usar If else, While, únicamente con objetos y arreglos imprimir los dias de la semana

let diax = 3;

//Con objetos
const diasLetras = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

//Con Arreglo
const diasLetras2 = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const diasLetras3 = [
  () => "Domingo",
  () => "Lunes",
  () => "Martes",
  () => "Miercoles",
  () => "Jueves",
  () => "Viernes",
  () => "Sabado",
];

console.log(diasLetras[diax] || "Dia no definido");
console.log(diasLetras2[diax] || "Dia no definido");
//Para ejecutar la funcion
console.log(diasLetras3[diax]() || "Dia no definido");
