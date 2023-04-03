// Esta era la manera de trabajar con las 'Classes' antes del ES6

const lok = {
  nombre: "Lokesh Pereiro",
  edad: 30,
  nombreEdad() {
    // console.log(`Nombre:${lok.nombre} - Edad:${lok.edad}`);
    console.log(`Nombre:${this.nombre} - Edad:${this.edad}`);
  },
};

/*
-> Para hacer referencia a las propiedades del mismo objeto usar la palabra reservada 'this'.

-> Se podría hacer la referencia con, por ejemplo, lok.nombre o lok.edad pero no es recomdable ya que si se cambia la variable lok, nos va a saltar un error gordo)

-> Si tenemos muchos objetos, tendriamos que copiar y pegar el mismo método nombreEdad() una y otra vez para acceder a las propiedades y la propia varible con las propiedades
*/

// lok.nombreEdad();

// # Solucion a ese problema, OperCamel case, crear objetos que tengan mismas propiedades y que se pueda trabajar 'con las herencias'.

//OperCamel Case, nos permite crear objetos a través de Instancias

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre: ${nombre} -- Edad: ${edad}`);
  };
}

// Gracias a la palabra reservada 'new' podemos hacer instancias de un objeto
const maria = new Persona("Maria", 18);
console.log(maria);
maria.imprimir();

/*
- Este tipo de ejercicios se complicaría más si yo necesito añadir propiedades y funcionalidades que yo no quiero que se cambie
- Por ejemplo, las propiedades estáticas y/o las popiedades privadas
 */
