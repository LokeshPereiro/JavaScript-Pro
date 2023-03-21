const returnTrue = () => {
  console.log("Devuelveme el True");
  return true;
};

const returnFalse = () => {
  console.log("Devuelveme el False");
  return false;
};

console.warn("!Not o distinto");
// console.log(!returnFalse());

console.warn("==== && ===");

// console.log(true && true); //true porque ambos son true
// console.log(true && false); //false porque son distintos

// console.log(true && !false); //true
// console.log(!true && false); //false

// El operador AND siempre tiene que ser true, si ya de primeras hay algo en false, no se ejecuta
console.log(returnFalse() && !returnTrue()); //false, aunque se cumple la condición de ser false ('ambos son iguales') para and no lo es

// En este caso, si el segundo valor se hace true funciona el AND
// console.log(returnTrue() && !returnFalse());

console.warn("=== || ==="); //Auanque una condición sea true, el operador OR se ejecuta

console.log(returnTrue() || returnFalse());

// Solo va a ser false cuando ambas condiciones sean falsas
console.log(!returnTrue() || returnFalse());

console.warn("==== Asignaciones ===");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// Al tener un valor intrínseco la variable definida tomara el último valor como output (siempre que la condición sea verdadera desde el principio)
const a1 = true && "Hola Mundo" && 150; //150
const a2 = false && "Hola" && "Mundo"; //false

const a3 = "Hola" && "Mundo" && soyNull; //null
const a4 = "Hola" && soyFalso && true; // false
// Si el primer valor fuese positivo y distinto a undefined, null y false se ejecutaría lo primero
// Es decir si no tiene valor entonces es falso (para el operador OR)
const a5 = soyFalso || "Hello Mundo"; //Hello Mundo
// Va a seguir sienod 'Hello Mundo' ya que encontró primer valor, el resto le da igual
const a6 = soyFalso || "Hello Mundo" || true; //Hello Mundo

// console.log(a1, a2);
// console.log(a3, a4);
console.log(a5);
