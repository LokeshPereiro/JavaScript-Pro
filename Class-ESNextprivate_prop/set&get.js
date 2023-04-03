/* Orden: 
- Propiedades y métodos estáticos
- Propiedades de las clases
- Constructores
- Set y Gets
- Métodos
*/

class Persona {
  // nombre = "";
  // codigo = "";
  // frase = "";
  comida = "";

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
  //El set solo recibe un argumento
  //Es para establecer un valor a una propiedad
  set setcomidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getcomidaFavorita() {
    //Es para devolver el valor de una propiedad
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }
}

const spiderman = new Persona("Pedro", "xyz123", "Hello World!!");
const ironman = new Persona("Tony", "adc123", "Soy Ironman");

//Los Sets y los Gets son una propiedad, y NO un método
spiderman.setcomidaFavorita = "El Pie de cereza de la tia May";
//La propiedad no existe pero no la mete igual (nos acepta esta propiedad)
spiderman.nemesis = "Duende verde";

console.log(spiderman);
console.log(`Set: ${spiderman.getcomidaFavorita}`);
