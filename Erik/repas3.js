// script.js

// Suma de Elementos de un Array
function sumarArray(array) {
    return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

// Función con Parámetros para Multiplicación
function multiplicar(a, b) {
    return a * b;
}

// Encontrar el Elemento Más Grande
function encontrarMaximo(array) {
    return Math.max(...array);
}

// Inversión de un Array
function invertirArray(array) {
    return array.slice().reverse();
}

// Eliminar Elementos Duplicados
function eliminarDuplicados(array) {
    return [...new Set(array)];
}

// Ejemplo de uso
const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Suma del array:", sumarArray(numeros));
console.log("Multiplicación de 3 y 4:", multiplicar(3, 4));
console.log("Número más grande:", encontrarMaximo(numeros));
console.log("Array invertido:", invertirArray(numeros));
console.log("Array sin duplicados:", eliminarDuplicados(numeros));
