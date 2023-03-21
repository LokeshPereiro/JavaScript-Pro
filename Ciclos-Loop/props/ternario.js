/*
 * Dias de la semana a las 11:00,
  findes a las 9:00
 */

//Creamos esa condición de la tienda
const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; //Está abierto, Está cerrado, hoy abrimos a las xxx

//1era OPCION
if (dia === 0 || dia === 6) {
  console.log("Fin de Semana");
  horaApertura = 9;
} else {
  console.log("Dia de la Semana");
  horaApertura = 11;
}

//2nd OPCION, Operador Ternario
horaApertura = [0, 6].includes(dia) ? 9 : 11;

if (horaActual >= horaApertura) {
  mensaje = "Estamos abiertos";
} else {
  mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

mensaje =
  horaActual >= horaApertura
    ? "Estamos abiertos"
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;
console.log(mensaje);
///PRO-TIPS
