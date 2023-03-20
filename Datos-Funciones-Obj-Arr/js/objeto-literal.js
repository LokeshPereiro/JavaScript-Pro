//Objetos Literales -> Una variable que tiene pares de valores o objeto que tiene pares de valores
let personaje = {
  nombre: "Lokesh Pereiro",
  codeName: "lpdraft",
  vivo: true,
  edad: 25,
  coords: {
    lat: 34.034,
    log: -118.7,
  },
  trajes: ["Chandal", "Camiseta", "Americana"],
  direccion: {
    zip: "10880, 90265",
    ubi: "LA, California",
  },
};
//Sintaxis de punto
// console.log(personaje.codeName);

// también podemos  acceder al valor de esta form
// console.log(personaje["codeName"]);

//Obtener objetos anidados
// console.log(personaje.coords.lat);

//Ejeer
//Nueros de traje Ironman
// console.log("Nº Trajes:", personaje.trajes.length);
// console.log("Último Traje:", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
// console.log(personaje[x]);

//MAS DETALLES
//Borrar un propiedad
delete personaje.edad;

// Object.entries() -> me permite hacer un barrido del objeto y obtener las [ propiedades y sus valores ]
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Añade una propiedad màs
personaje.casado = true;

//Evitamos que se introduzca más elementos de esta forma, pues se queda con las propiedades que ya las tenía previamente

//Tampoco puedo modifiacar las Propiedades existentes
// Tano Seal or Freeze son casi iguales
Object.seal(personaje);
// No puedo insertar una nueva propiedad
personaje.dinero = 10000;
// No puedo modificar el valor de la propiedad
personaje.casado = false;

// No obstante, sí puedo añadir y modificar las propiedades del objecto otro obj
personaje.direccion.ubi = "Madrid";
personaje.direccion.codigopostal = 33300;
// console.log(personaje);

const props = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje);
console.log(values);
