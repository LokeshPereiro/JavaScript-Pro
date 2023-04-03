// ## Las propiedades estáticas o métodos estáticos nos permiten utilizar dichos métodos/propiedades estáticos sin la necesidad de 'instanciar' la Class que los contiene

class Persona {
  //Nos sirve para saber cuantas instancias se han hecho con la Class Persona
  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    // ## Cuando se trabaja con los métodos estáticos no se puede acceder a los valores del constructutor
    // console.log(this.nombre); --> undefined
    console.log("static!!");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    //Dentro del constructor es bueno iniciar el conteo ya que siempe que necesitamos crear una instancia se ejecuta el constructor
    Persona._conteo++;
  }
  //El set solo recibe un argumento
  //Es para establecer el valor
  set setcomidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getcomidaFavorita() {
    //Recupera una propiedad construida
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }
}
const spiderman = new Persona("Spiderman", "hello", "Soy Peter");
const ironman = new Persona("Tony", "adc123", "Soy tu Jefe");
const batman = new Persona("Tom", "bat123", "Soy Batman");

spiderman.setcomidaFavorita = "El pastel de la tía May";
batman.setcomidaFavorita = "la cabeza de los payasos";

console.log(spiderman);
console.log(spiderman.getcomidaFavorita);

console.log(batman);
console.log(batman.getcomidaFavorita);

// Persona._conteo = 2; //Esto no es dinámico
console.log("Conteo stático", Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();

//Tabién se puede crear propiedades estáticas fuera del Objeto Persona
Persona.propiedadExterna = "Hola Mundo";
console.log(Persona.propiedadExterna);
//Pero no lo ves
console.log(Persona);
