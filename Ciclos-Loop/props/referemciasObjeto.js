// Paso de variables con VALOR y por REFERENCIA

/*
Cuando estamos trabajando con primitivos, let a=10,  a=30..
cualquier asignacion o lo mandamos a una funcion como un argumento..LO ESTAMOS MANDANDO POR VALOR
- NO importa si tranformamos lla variable, o le damos un valor distinto al original 
*/
let a = 10;
let b = a;
a = 30;

//  console.log(a, b);

//POR REFERENCIAS

let juanx = {
  nombre: "Juan",
};

// ana.nombre = 'Ana'; Se transforma e valor (ahora se llamará Ana)

//En JS todos los objetos son pasados por referencias {los primitivos se pasan por valor}
//Tenemos que remper la referencia al objeto de 'juanx', para que "ana.nombre" tome como refencia el siguiente código de valor
//(¡Como lo hacemos: Spread Operator--> Separar todos las propiedades y los valores de un objeto)

let ana = { ...juanx };
ana.nombre = "Ana";

console.log({
  juanx,
  ana,
});

//Para romper la relacion, volvemos a usar el spread operator (ojo en los parámetros debe ir entre llaves ya que sino sería un Operator REST)
const cambiarNombre = ({ ...persona }) => {
  //Operados REST caundo está dentro del parámetro. Significa, unine todos los argumentos en una sola.
  persona.nombre = "Tony";
  return persona;
};
let peter = { nombre: "Peter" };
let tony = cambiarNombre(peter);
//  console.log({peter, tony});

//en los ARREGLOS
const frutas = ["Manzana", "Pera", "Piña"];

//Spread oprator para separarlo del arreglo de referencia y clonarlo en el nuevo (otrasFrutas);
//  const otrasFrutas = [...frutas];

//Or de esta forma para romper esa relacion
//Nos devuelve un nuevo arreglo rompiendo la relacion con el arregllo frutas
//  const otrasFrutas = frutas.slice();

//  console.table({frutas, otrasFrutas});

//Entonces, cual elegimos sugún el volumen de trabajo

//Spread
console.time("spread");
const otrasFrutas = [...frutas];
console.timeEnd("spread");

//.Slice()
console.time("slice");
const otrasFrutas2 = frutas.slice();
console.timeEnd("slice");

otrasFrutas.push("Mango");
console.log({ frutas, otrasFrutas });

///RESUMEN
//El Spread operator es más eficiente ya que tarda menos en concatenar o ejecutarla
