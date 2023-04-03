//El objetivo de las clases es que todas las instancias tengan las mismas propiedades que 'Persona', evitamos la problematica de herencias

class Persona {
  // Constructor es un método (de POO) que se ejecuta exactamente cuando se crea una instancia de new Persona
  //   Estas asignaciones son necesarias para darle cobertuara a todo el scope de la clase, es decir, sin ellas los métodos no tendrían ninguna refrencia (no haya ser que lo definamos en los propios métodos)
  nombre = "";
  codigo = "";
  frase = "";

  //  Podemos pasar valores por defecto (que para JS es undefined) nombre = sin nombre
  constructor(
    nombre = "Sin nombre",
    codigo = "Sin código",
    frase = "Sin frase"
  ) {
    // if (!nombre) throw Error("Faltan argumentos..");
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
  //Los MÉTODOS por lo general van despues del constructor
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi código es ${this.codigo}`);
  }
  miFrase() {
    //Si quiero llamar al metodo anterior en este..
    // this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

//Declarar las instancias de esta manera nos permite tener muchos objetos diferentes (que usen las mismas propiedades) e información
const spiderman = new Persona(
  "Peter Parker",
  "xyz123",
  "Soy tu amigo Spiderman"
);
// const ironman = new Persona("Tony Stark", "adc123", "Yo soy Ironman");

// console.log(spiderman);
// console.log(ironman);

/* Métodos de las clases */
spiderman.quienSoy();
// spiderman.miFrase();
