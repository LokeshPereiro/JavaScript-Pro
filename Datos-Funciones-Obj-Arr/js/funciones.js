//Funciones Declarativas
//Despues/antes de haber creado, tenemos que llamarla
function saludarA() {
  console.log("Hola Lokesh");
}

const saludarB = function (nombre) {
  console.log("Hola " + nombre);
};

// Diferencia entre declarar la funcion  de manera tradicional y en una variable
// saludarA es más vulnerable pues, yo podría hacerla inútil simplemente con la variable var
var saludarA = "Hackeo la función";
console.log(saludarA); // Hackeo la función

// saludarB cuenta con medidads de seguridad, por lo que, si declaro otra varible con el mismo nombre el JS no lo permite

// Fucniones con Argumentos

function hello(nombre) {
  console.log(`Hola ${nombre}`);
  //   con arguments puedo leer todo
  //   console.log(arguments);
}
// //Pasamo aqui el valor del parametro
// hello("Chanchito Perez");

// Solo lee el primer argumento
// Dato: en las funciones tradiconales es posible hacer esto pero en los arrow funcion y de varible no es possible
hello("Lok", 45, false, "España");

const arrowFuncion = () => {
  console.log("Arrow function!");
};
arrowFuncion();
