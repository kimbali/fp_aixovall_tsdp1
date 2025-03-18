// - Nivell 3

// Exercici 11
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumaArray(arr) {
    return arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

console.log("Ex. 11:", sumaArray(array));

// Exercici 12
function multiplicarParametres(num1, num2) {
    return num1 * num2;
}

let parametre1 = 5;
let parametre2 = 10;

console.log("Ex. 12:", multiplicarParametres(parametre1, parametre2));

// Exercici 13