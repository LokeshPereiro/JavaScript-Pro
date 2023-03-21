// Paso de variables por VALOR y por REFERENCIA

/*

Cuando estamos trabajando con primitivos (string, number..),
cualquier tipo de asignacion o cuando lo mandamos a una funcion como un argumento..LO ESTAMOS MANDANDO POR VALOR
- NO importa si tranformamos la variable, o le damos un valor distinto al original no importa,  el valor siempre va a ser lo que le definamos

*/

let a = "Lok";
// b siempre va a ser 'Lok' no haya ser que la nueva asignación lo pongamos encima de este
let b = a;

a = 30;

console.log({ a, b }); //a=30, b=Lok

// ## POR REFERENCIAS ##
//A diferencia de los primitivos, en JS todos los objetos son pasados por referencia. Quiere decir que, cualquier modificación que hagamos afecta al objeto original
let pepe = {
  nombre: "Pepe",
};
let ana = { pepe };
// let ana2 = { ...pepe }; //con el spread si es posible separarlos
ana.nombre = "Ana";

console.log({ pepe, ana }); //Ambos pasan aa llamarse 'Ana' porque hemos modificado la propiedad nombre del obj de referencia

// Como podemos romper esa referencia y separar las propiedades y sus valores de manera independiente
// #  Spread Operator

// Ojo si ponemos un 'spread' sin las llaves, no sería spread sino rest (une multiples argumentos en una)

const anadirNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};
let peter = { nombre: "Peter" };

let tony = anadirNombre(peter);

// Si no poner el spread operator, cualquier nombre que le pasemos siempre serán 'Tony', ya que la función retorna ese nombre. No haya ser que el "persona.nombre" lo dejos sin asignarlo, en tal caso, el nombre será lo que pasemos como argumento
console.log({ peter, tony });

//en los ARREGLOS
const frutas = ["Manzana", "Pera", "Piña"];

// Coloca Mango en ambos, tanto en la variable frutas como en extraFrutas
// const extraFrutas = frutas;

// Ahora solo la variable extraFrutas va a tener Mango en su arr
// const extraFrutas = [...frutas];

//También se puede hacerlo con el .slice() que rompe la referencia
const extraFrutas = frutas.slice();
extraFrutas.push("Mango", "Banana");
console.table({ frutas, extraFrutas });

// ¿¿ Qué metodo es mejor ??

//Spread
console.time("spread");
const otrasFrutasSpread = [...frutas];
console.timeEnd("spread");

//.Slice()
console.time("slice");
const otrasFrutasSlice = frutas.slice();
console.timeEnd("slice");

///RESUMEN
//El Spread Operator es más eficiente ya que tarda menos en concatenar o ejecutarla
