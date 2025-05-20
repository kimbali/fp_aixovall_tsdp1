// nivell 4 / exercici 1

const persona = {
    nom: "Alex",
    edat: 16,
    ciutat: "Aixovall"
};

function mostrarSalutacio() {
    console.log(`Hola, em dic ${persona.nom}, tinc ${persona.edat} anys i visc a ${persona.ciutat}.`);
}

mostrarSalutacio();

// nivell 4 / exercici 2
function comptarVocals(cadena) {
    return cadena.split("").filter(lletra => "aeiou".includes(lletra.toLowerCase())).length;
}

// Exemple d'ús
console.log(comptarVocals("Hola, com estàs?")); // Sortida: 7

// nivell 4 / exercici 3
function filtrarNumerosPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

// Exemple d'ús
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6])); // Sortida: [2, 4, 6]

// nivell 4 / exercici 4
