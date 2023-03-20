## 1. Tipo de dato de una variable

JavaScript es un lenguaje débilmente tipado -> nosotros explicitamente no le decimos a JS que esta variable va a tener un 'string', un 'boolean'... el propio lenguaje lo interpreta de la mejor manera que puede según los datos introducidos.

```javascript
Los tipos de datos:

 "Describen el contenido del valor de la variable en question, es decir, a qué tipo de dato apunta ese valor"
```

En javaScript existen dos tipos de datos [ PRIMITIVOS y OBJETOS]

- <b>Primitivos</b>: Tipo de datos que no pueden ser objetos { } y son inmutables. Dicho de otra forma, el valor de la variable puede ser cambiada por otro dato primitivo pero el dato en sí NO, como suele pasar con los objetos

| Primitivos | tipos                                              |
| ---------- | -------------------------------------------------- |
| Boolean    | True - False                                       |
| Null       | No hay valor en absoluto                           |
| Undefined  | Existe la variable pero açun no se le asignó valor |
| Number     | Integers, floats ..                                |
| String     | Cadena de caracteres                               |
| Symbol     | Valor único que no es igual a ningun otro valor    |

## 2. Arreglos

Son un objeto parecido a una lista de información, que contienen un grupo de elementos. Podemos almacenar cualquier cosa. Normalmente, esa información destro del arreglo usele ser del mismo tipo..

```javascript
Sirven para:

 "Agrupar elementos del mismo tipo. Ejemplo, carrito de compra, likes.. [ ] "

 let arr = [
  "Apple",
  "Orange",
  "Banana",
  "Pears",
];
let primeraFruta = arr[0]; //Apple
let ultimaFruta = arr[arr.length - 1]; //Pears


let añadirFruta = arr.push("Papaya");
console.log({
  // ahora tengo 5 elementos
  nuevoJuego,
  //  Y mi fruta aparece como el último elemento
  añadirFruta,
});

unshift(); Este método me lo añade al principio del arreglo

pop(); Me borra el último elemento (no necesita args).

.shift(); Me borra el primer elemento (no necesita args).

.splice(); puede decirle desde qué punto quiero que me borre los elementos (y cauntos)

¡¡ [ let spliceFrutas = arr.splice(1, 3); ] !!

A partir de 'Apple' me borra 3 elementos (Orange, Banana, Pears) y me devuleve otro arreglo con los resultados =  ['Apple', 'Papaya']

```

## 3. Objetos

Todos lo que no sea datos primitivos en JS, son objetos. Los objs se podría definir como una variable que tiene pares de valores o objeto que tiene pares de valores

```javascript
let personaje = {
  nombre: "Lokesh Pereiro",
  codeName: "lpdraft",
  vivo: true,
  edad: 25,
  ropa: ["Chandal", "Camiseta", "Americana"],
  direccion: {
    zip: "10880, 90265",
    ubi: "LA, California",
  },
};

//Sintaxis de punto para acceder a los distintos valores del obj
console.log(personaje.codeName);

//Borrar una propiedad
delete personaje.edad;

Los  métodos freeze() & seal() -> me permiten congelar las propiedades del obj, es decir, no puedo modificar las propiedades ni valores

No obstante, sí puedo modificar las propiedades de otro objeto dentro de él

[
  personaje.direccion.ubi = "Comunidad de Madrid";
  personaje.direccion.codigoPostal = 3000;

]
```

## 4. Funciones

Son una serie de procedimientos o instrucciones que realizan una acción en concreto. Las ventajas de una función nestá en que son reutilizables, pues una misma función podemos útilizar en múltiples archivo si así se desea.

```javascript
// Funcion  tradiconal / DECLARATIVA (  utiliza la palabra reservada function ). Puede llamarse/ejecutarse antes o despues de crear la función en sí
function saludarA() {
  console.log("Hola Lokesh");
}

// EXPRESIVA: No se puede ejecutar antes de ser creada
const saludarB = function () {
  console.log("Hola Lokesh");
};

Ambar funciones son iguales pero una es más segura que otra....

La funcion saludarA, por ejemplo, con la variable 'var', yo podría cambiarle su ejecución o modificarla

  var saludarA = "Hackeo la función";
console.log(saludarA); // Hackeo la función

//  5.1. ARROW Function
const arrowFuncion = () => {
  console.log("Arrow function!");
};

// funciones con argumentos
function hello(nombre) {
  console.log(`Hola ${nombre}`); //Hola Chanchito Perez
}
hello("Chanchito Perez");

//  5.2. RETURN
function saludar(nombre) {
  // cuando llamo a la función me imprime esta linea de código
  console.log(`Hola ${nombre}!`);

  // Luego hace el return de 'Hello world", todo lo que esté despues de return  nunca se va a ejecutar
  return "Hello  World";

  console.log("No me puedo ejecutar");
}

const valorReturn = saludar("Lokesh");

// Si no tengo un return entonces la función retorna un 'undefined'
console.log(valorReturn);

const sumar = (a,b) => {
  return  a + b;
}
sumar(2,3); //5



```
