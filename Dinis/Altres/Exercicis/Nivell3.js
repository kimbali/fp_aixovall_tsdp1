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
let arrayy = [52, 61, 26, 109, 2, 7];
Math.max(...arrayy);
console.log("Ex. 13:", Math.max(...arrayy));

// Exercici 14
arrayy.reverse();
console.log("Ex. 14:", arrayy);

// Exercici 15
let arrayDuplicat = [2, 2, 7, 4, 90, 2, 2, 6, 6];
new Set(arrayDuplicat);
Array.from(new Set(arrayDuplicat));
console.log("Ex. 15:", Array.from(new Set(arrayDuplicat)));