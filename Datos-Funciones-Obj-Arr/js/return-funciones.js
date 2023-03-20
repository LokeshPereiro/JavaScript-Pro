// Si no  está el return explicitamente, no retorna nada
// El console.log() no es el valor que retorna, es tan solo una impresion en la pantalla de un bloque de código

function saludar(nombre) {
  // cuando  llamo  la función me imprime esta linea de código
  console.log(`Hola ${nombre}!`);

  // Luego hace el return de 'Hello world", todo lo que esté despues de return  nunca se va  a ejecutar
  return "Hello  World";

  console.log("No me puedo ejecutar");
}

const valorReturn = saludar("Lokesh");

// Si no tengo un return entonces la función retorna un 'undefined'
// console.log(valorReturn);

const sumar = (a, b) => {
  return a + b;
};
// sumar(2, 3);
// console.log(sumar(2, 3));

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log(randomNumber(1, 20));
