// - Nivell 4

// Exercici 16
const persona = {
    nom: "Dinis",
    edat: 16,
};

function saludar(obj) {
    console.log(`Ex. 16: Hola, em dic ${obj.nom} i tinc ${obj.edat} anys.`);
}

saludar(persona);

// Exercici 17
function contadorDeVocals(string) {
    let vocals = string.match(/[aeiou]/gi);
    console.log(`Ex. 17: El text té ${vocals.length} vocals.`);
}

contadorDeVocals("Hola, em dic Dinis.");

// Exercici 18
function filtradorDeNumerosPars(num) {
    num = num.filter(n => n % 2 === 0);
    console.log("Ex. 18: Els numeros pars són: ", num);
}

filtradorDeNumerosPars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Exercici 19
function ordenarArray(array) {
    console.log("Ex. 19: Array ordenat: ", array.sort((a, b) => a - b));
}

ordenarArray([5, 3, 7, 1, 9, 2, 8, 4, 6]);

// Exercici 20
function calcularMitjana(array) {
    let mitjana = array.reduce((acc, num) => acc + num) / array.length;
    console.log("Ex. 20: La mitjana és: ", mitjana);
}

calcularMitjana([5, 3, 7, 1, 9, 2, 8, 4, 6]);