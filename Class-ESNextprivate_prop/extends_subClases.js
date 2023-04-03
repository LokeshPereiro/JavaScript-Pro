class Persona {
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setcomidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getcomidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi código es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}
// # Extends
class Heroe extends Persona {
  //Nueva propiedad 'clan'., que no está en la class Persona

  clan = "sin clan";
  constructor(nombre, codigo, frase) {
    //Tenemos que llamar al constructor padre para poder insertar nuestra propiedad (tiene que ir antes del this Heore)
    //Es decir, super() nos permite extender las propiedades de 'Persona'
    super(nombre, codigo, frase);
    this.clan = "Los Avengers";
  }
  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    // método del padre
    super.quienSoy();
  }
}

// const spiderman = new Persona('Pedro', 'xyz123', 'Hola Mundo');
const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu vecino Spiderman"
);
console.log(spiderman);
spiderman.quienSoy();
