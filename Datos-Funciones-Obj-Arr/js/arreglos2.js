let arregloNew = [
  "Batman",
  "Megaman",
  "Zero",
  "Dr.Light",
  "Dr.Willy",
  "Woodman",
];
//largo del arreglo
// console.log(arregloNew.length);

// let primeroEle = arregloNew[0];
// let ultimoEle = arregloNew[arregloNew.length - 1];
// console.log({ primeroEle, ultimoEle });

// arregloNew.forEach((elemento, indice) => {
//   console.log({
//     elemento,
//     indice,
//   });
// });

// //Insertar un nuevo elemento dentro del arreglo
// //Se lo añade al final del arreglo
// let nuevoJuego = arregloNew.push("X-Man");
// console.log({
//   // ahora engo 7 elementos
//   nuevoJuego,
//   arregloNew,
// });

// O modificarlo directamente de esta forma
//  arregloNew[0] = "Hello World";

// //Reescribimos y añadimos un nuevo elemento al principio
// nuevaCosa = arregloNew.unshift("Fire Emblem");

// //Borrarmos el último elementpo del arreglo
// let nuevaCosa2 = arregloNew.pop();
// console.log({
//   nuevaCosa2,
//   arregloNew,
// });

//Si quiero borrar elementos de cualquier posicion
let pos = 1;
// Recibe un punto inicial y cuantos elementos queremos borrar y devuleve un arr con los resultados
//Desde la posicion 1 'Fire Embl', borra 2 elementos siguientes
let pelisBorradas = arregloNew.splice(pos, 2);
console.log({
  pelisBorradas,
  arregloNew,
});

// //Tambien se pueden buscar los elementos de la siguiente manera
// let willyIndexof = arregloNew.indexOf("Dr.Willy");
// console.log(willyIndexof, arregloNew);
