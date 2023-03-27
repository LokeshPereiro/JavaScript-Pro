const aovHeros = ["Tachi", "Kriknak", "Yena", "Murad"];

// Ciclo For
console.warn("------ For ------");
for (let i = 0; i < aovHeros.length; i++) {
  console.log(aovHeros[i]);
}

// For In --> Es lo mismo que el FOR tradiconal pero el código es más limpio
console.warn("------ For In ------");
for (let i in aovHeros) {
  // 1 vuelta
  console.log(aovHeros[i]);
  //   4 vueltas
  //   for (let j in aovHeros) {
  //     console.log(aovHeros[j]);
  //   }
}

// For of --> Es casi lo mismo que los anteriores pero el "for of" se usa normalmente para obtener lasd referencias de valor de los objetos, arr
console.warn("------ For Of ------");
for (let hero of aovHeros) {
  console.log(hero);
}
