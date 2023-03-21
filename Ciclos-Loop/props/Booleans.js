const regrsaTrue = () => {
  console.log("Devuelveme el True");
  return true;
};
const regrsaFalse = () => {
  console.log("Devuelveme el False");
  return false;
};
console.warn("Not o la negación");
console.log(true);
console.log(!true);

console.log(!regrsaFalse());

console.warn("====&&===");
console.log(regrsaFalse() && regrsaTrue());
console.log(regrsaTrue() && regrsaFalse());

regrsaTrue() && regrsaFalse();

console.warn("=== || ===");
//Si cualquier condicion marcado cumple
console.log(regrsaFalse() || regrsaTrue());

console.warn("====Asignaciones===");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

//Al tener un valor intrínseco la variable definida tomara el último valor como output
const a1 = true && "Hola Mundo" && 150; //150
const a2 = "Hola" && "Mundo"; //Mundo

//En este caso, JS tendrá en cuenta el valor de Referencia
const a3 = "Hola" && "Mundo" && soyNull; //null
const a4 = soyFalso || "Mundo" || soyNull; //Mundo
//No llega a ejecutar la ñultima ya que hay una condición verdadera
const a5 = soyFalso || "Mundo" || soyNull || true; //Mundo

console.log(a1, a2);
console.log(a4, a5);
