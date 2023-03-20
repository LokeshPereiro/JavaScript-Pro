# Variables ( VAR, LET, CONST )

    # Variables: Es un contenedor de información que apunta a un lugar en memoria dentro de nuestro ordenador. Puede guardar cualquier tipo de dato, información.. Una variable no puede iniciarse con un número, tampoco puede haber dos variables iguales.  Hay tres tipos de variables:

    - VAR: Se recomienda No Usarla ya que se puede volver a declarar otra variable con el mismo nombre y reasiginar el último valor. No distingue las palabras reservadas del JavaScript. Tiene un alcanze global

    - LET: Permite reasginar sus valores; iniciar variables sin valor; No se puede volver a declarar una variable let con el mismo nombre, tampoco acceder a una variable antes de crearla (el orden import en JS)

    - CONST: No se puede declarar una constante sin valor; Tampoco puedes volver a reasginar un nuevo valor; Ni declar dos constantes iguales

```javascript
const nombre = "Lokesh Pereiro"

{
    const : Nombre reservado JS
    nombre : Mi variable
    "Lokesh Pereiro" : El valor de mi variable
}
```

## ¿ Por qué NO USAR la variable VAR ?

Principal razón: Me permite reemplazar las propiedades y objetos propios del objeto ¡¡ global windows !!

```javascript
var myName = "Jaimito"

[
    - Puedo acceder al valor de 'myName' desde cualquier archivo de mi app porque la variable var se encuentra en el objeto windows.

    - Cambiar alguna propiedad del objeto windows con otras propiedades

]
```

## JavaScript Scope

In javaScript, objects and functions are also variables. Scope determines the accessibility of <b>variables</b>, objects, and functions from different parts of the code.
JavaScript has 3 types of scope:

- Block scope ( LET & CONST ) -> This means that variables declared inside the block { }, only be accesible inside that specific block of code

- Function scope -> variables declared inside the function only be accessed from within the function. Makes them local

- Global scope ( globally accessible, e.g. most variables declared with VAR or all declared outside the function )

```javascript
let myCar = "Seat"; //Global
function myFuction() {
  let myCar = "Volvo"; //Local
}
```

## Métodos y/o funciones

```javascript
console.log("Hello World!");

Cuando hay un punto algo, automáticamente hemos de pensar que se trata  de un método que ejecuta  algo y precede de un objecto.

[ console ] -> objeto {}

[ .log() ] ->  método

```

# Tipos de Datos en JavaScript
