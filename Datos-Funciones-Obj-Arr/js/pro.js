// # Retornar un obj con la info
// function crearPersona(nombre, apellido) {
//   return {
//     nombre,
//     apellido,
//   };
// }

//En el Arrow function
const crearPersona = (nombre, apellido) => ({
  //Si quitamos el return, es necesario, (), sino nos devuelve undefined
  nombre,
  apellido,
});

const persona = crearPersona("Lokesh", "Pereiro");
console.log(persona);

// Función tradiconal puede recibir múltiples argumentos sin el operador Rest
// function imprimirArgumento() {
//   console.log(arguments);
// }

//Es necesario parámetro REST (...args). Ojo, despues del parametro rest, no puede venir ningun otro argumento
const imprimirArgumentoArrow = (...args) => {
  //   console.log(args);
  return args;
};
// imprimirArgumento("Lokesh", 44, true);s
// imprimirArgumentoArrow("Lokesh", 44, true);

// Puedo asignar una propiedad a cada una de esos argumentos
//Es decir, en vez de poner argumentos [0], argumentos[1]...
const [edad, casado, vivo, nombre] = imprimirArgumentoArrow(
  25,
  false,
  false,
  "Lokesh"
);

console.log({
  edad,
  casado,
  vivo,
  nombre,
});

// Destructuring en un OBJ
const { apellido } = crearPersona("Jaimito", "Sanchez");
console.log(apellido);

const infoLok = {
  nombre: "Lokesh",
  codeName: "lpdraft",
  phone: 5638430459,
};

const showLokInfo = ({ nombre, codeName, phone, saludo = "Hola Lokesh" }) => {
  //   console.log(info);
  //   Podemos validarlo de esta forma y asignar un valor
  //   saludo = saludo || "No hay saludo";
  console.log({ nombre, codeName, phone, saludo });
};

showLokInfo(infoLok);
