//EsNext
//#area --> propiedades privadas
class Rectangulo {
  // [ Podemos proteger nuestras propiedades de el # pero los métodos de momento no ]
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }
  //NO hay métodos privados por ahora
  //   #calcularArea() {
  //     console.log(this.#area * 2);
  //   }
}

const resultado = new Rectangulo(5, 15);
// resultado.area = 1000;
console.log(resultado);
// resultado.#area = 1000; //Private Field, no se puede modificar directamente
// resultado.calcularArea();

// # Singleton #
//Es una instancia global única de mi clase, no sufre cambios, siempre devuelve los valores de mis propiedades que me haya defenido dentro de él

class miSingleton {
  static instancia; //
  nombre = "";

  constructor(nombre = "") {
    const a = undefined;
    console.log(a);
    console.log(!a);
    //!!=Si ya existe
    console.log(!!a);
    if (!!miSingleton.instancia) {
      return miSingleton.instancia;
    }

    miSingleton.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new miSingleton("Ironman");
const instancia2 = new miSingleton("Batman");
const instancia3 = new miSingleton("BlackPanther");

console.log(instancia1.nombre);
console.log(instancia2.nombre);
console.log(instancia3.nombre);
//Nos va a devolver 'Ironman ya que la instancia ya está definida previamente por lo que no sufre cambios
