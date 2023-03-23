const heroes = ["Batman", "Superman", "Deadpool", "Capitan America"];

// Ciclo For
console.warn("------ For ------");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// For In
console.warn("------ For In ------");
for (let i in heroes) {
  // 1 vuelta
  console.log(heroes[i]);
  //   4 vueltas
  //   for (let j in heroes) {
  //     console.log(heroes[j]);
  //   }
}

// For of
console.warn("------ For Of ------");
for (let hero of heroes) {
  console.log(hero);
}
//En For of, es mejor poner heroe (en vez de i)=> (let hero of heroes)
