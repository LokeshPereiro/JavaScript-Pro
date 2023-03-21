## Variables por VALOR y por REFERENCIA

Cuando estamos trabajando con los primitivos (string, number..), cualquier tipo de asignacion o cuando las mandamos a una funcion como un argumento.. <b>LO ESTAMOS MANDANDO POR VALOR</b>

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
