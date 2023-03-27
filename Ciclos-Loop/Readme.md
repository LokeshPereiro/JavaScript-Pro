## Variables por VALOR y por REFERENCIA

Cuando estamos trabajando con los primitivos (string, number..), cualquier tipo de asignación o cuando las mandamos a una funcion como un argumento.. <b>LO ESTAMOS MANDANDO POR VALOR</b>

- NO importa si tranformamos la variable, o le damos un valor distinto al original no importa, el valor siempre va a ser lo que le definamos

```javascript
let a = "Lok";
// b siempre va a ser 'Lok' no haya ser que la nueva asignación lo pongamos encima de éste
let b = a;
a = 30;
console.log({ a, b }); //{ a:30, b:Lok }

## POR REFERENCIAS ##
//A diferencia de los primitivos, en JS todos los objetos son pasados por referencia. Quiere decir que, cualquier modificación que hagamos afecta al objeto original
let pepe = {
  nombre: "Pepe",
};
let ana = { pepe };
// let ana2 = { ...pepe }; //con el spread si es posible separarlos
ana.nombre = "Ana";

console.log({ pepe, ana }); //Ambos pasan a llamarse 'Ana' porque hemos modificado la propiedad nombre del obj de referencia

¿ Como podemos romper esa referencia y separar las propiedades y sus valores de manera independiente ?

# Spread Operator #

// Ojo si ponemos un 'spread' sin las llaves, no sería spread sino REST (une multiples argumentos en una)

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
// const extraFrutas = [...frutas];

//También se puede hacerlo con el .slice() que rompe la referencia
const extraFrutas = frutas.slice();
extraFrutas.push("Mango", "Banana");
console.table({ frutas, extraFrutas });
```

## Ciclos y Estructuras de control

Las estructuras del control nos permiten romper la estructura de ejecución secuencial de JavaScript. Si paso esto haz esto..

```javascript
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
```

## Lógica Booleana

```javascript
const returnTrue = () => {
  console.log("Devuelveme el True");
  return true;
};

const returnFalse = () => {
  console.log("Devuelveme el False");
  return false;
};

// "!Not o distinto";
console.log(!returnFalse());

[ && ] // El operador AND siempre tiene que ser true, si ya de primeras hay algo en false, no se ejecuta
console.log(returnFalse() && !returnTrue()); //false, aunque se cumple la condición de ser false ('ambos son iguales') para AND no lo es

// En este caso, si el segundo valor se hace true funciona el AND
console.log(returnTrue() && !returnFalse());

[ || ] //Auanque una condición sea true, el operador OR se ejecuta


console.log(returnTrue() || returnFalse());

// Solo va a ser false cuando ambas condiciones sean falsas
console.log(!returnTrue() || returnFalse());
```

## Operador Ternario

El operador condicional ternario, a groso modo, es un "if else"

```javascript
/*
 - horaApertura: Entre semana, a las 11:00,
 - horaApertura: Los findes a las 9:00
 */

//Creamos esa condición de la tienda
const dia = 6;
const horaActual = 10;

let horaApertura;
let mensaje;

//1era OPCION
// Comprobar el día
if (dia === 0 || dia === 6) {
  console.log("Es **Fin de Semana**");
  //   horaApertura = 9;
} else {
  console.log("~Dia de la Semana~");
  //   horaApertura = 11;
}

// if (horaActual >= horaApertura) {
//   mensaje = "Estamos abiertos";
// } else {
//   mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }
// console.log(mensaje);

// ---------------------  2ª OPCION con el Operador Ternario    ------------------
horaApertura = [0, 6].includes(dia) ? 9 : 11;
mensaje =
  horaActual >= horaApertura
    ? "Estamos abiertos"
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;
console.log(mensaje);
```

## Switch

La estructura de control SWITCH es muy útil cuando queremos comparar/igualar ( '===' ) a un valor único

```javascript
switch (dia) {
  case 0:
    console.log("Hoy es Domingo");
    break;

  case 1:
    console.log("Hoy es Lunes");
    break;

  case 2:
    console.log("Hoy es Martes");
    break;

  case 3:
    console.log("Hoy es Miercoles");
    break;

  case 4:
    console.log("Hoy es Jueves");
    break;

  case 5:
    console.log("Hoy es Viernes");
    break;

  case 6:
    console.log("Hoy es Sabado");
    break;

  default:
    console.log(`No se qué dia es: ${dia}`);
}
```

# Ciclos

Los ciclos nos permiten ejecutar todas las funciones y/o condiciones definidas de manera dinámica

### While

```javascript
// Parecido a if else, switch..
// Para que la condición sea válida y que se cumpla, la función siempre tiene que devolver un "true"
// Las condiciones falsas con: false, undefined, null
const coches = ["Seat", "Cupra", "Ibiza", "Leon"];
let i = 0;

while (coches[i]) {
  if (i === 1) {
    // break;
    // Es necesario sino caemos en el bucle infinito
    i++;
    continue;
    // Ahora salta la posición 1 --> cupra
  }
  console.log(coches[i]);
  i++;
}

// # Do While #
let j = 2;
// Do siempre se ejecuta, al menos una vez (e.g. undefined), siempre y cuando while sea verdadero
do {
  console.log(coches[j]);
  j++;
} while (coches[j]);
```

### For, For In, For Of

```javascript
const aovHeros = ["Tachi", "Kriknak", "Yena", "Murad"];

// Ciclo For
for (let i = 0; i < aovHeros.length; i++) {
  console.log(aovHeros[i]);
}

// For In --> Es lo mismo que el FOR tradiconal pero el código es más limpio
for (let i in aovHeros) {
  // 1 vuelta
  console.log(aovHeros[i]);
  //   4 vueltas
  //   for (let j in aovHeros) {
  //     console.log(aovHeros[j]);
  //   }
}

// For of --> Es casi lo mismo que los anteriores pero el "for of" se usa normalmente para obtener lasd referencias de valor de los objetos, arr
for (let hero of aovHeros) {
  console.log(hero);
}
```
