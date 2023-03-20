## Tipo de dato de una variable

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

## Arreglos

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

pop(); Me borra el último elemento (no necesita args)

.splice(); puede decirle desde qué punto quiero que me borre los elementos (y cauntos)

¡¡ [ let spliceFrutas = arr.splice(1, 3); ] !!

A partir de 'Apple' me borra 3 elementos (Orange, Banana, Pears) y me devuleve otro arreglo con los resultados =  ['Apple', 'Papaya']

```
