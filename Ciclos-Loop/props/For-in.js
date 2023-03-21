const heroes = ['Batman', 'Superman', 'Mujer-Maravilla', 'Aquaman'];

console.warn('For tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}


console.warn('For In');
for (let i in heroes) {
    console.log(heroes[i]);
}


console.warn('For Of');
for (let i of heroes) {
    console.log(i);
}
//En For of, es mejor poner heroe (en vez de i)=> (let hero of heroes)