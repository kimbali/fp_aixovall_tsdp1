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

// Cálculo de Propiedades de un Objeto
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

function saludo(persona) {
    return `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;
}

// Contador de Vocales
function contarVocales(cadena) {
    return cadena.split('').filter(letra => "aeiouAEIOU".includes(letra)).length;
}

// Filtro de Números Pares
function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

// Ordenar Array
function ordenarArray(array) {
    return array.slice().sort((a, b) => a - b);
}

// Calculadora de Promedio
function calcularPromedio(array) {
    return array.length ? array.reduce((suma, num) => suma + num, 0) / array.length : 0;
}

// Ejemplo de uso
const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Suma del array:", sumarArray(numeros));
console.log("Multiplicación de 3 y 4:", multiplicar(3, 4));
console.log("Número más grande:", encontrarMaximo(numeros));
console.log("Array invertido:", invertirArray(numeros));
console.log("Array sin duplicados:", eliminarDuplicados(numeros));
console.log(saludo(persona));
console.log("Cantidad de vocales en 'Hola Mundo':", contarVocales("Hola Mundo"));
console.log("Números pares:", filtrarPares(numeros));
console.log("Array ordenado:", ordenarArray(numeros));
console.log("Promedio del array:", calcularPromedio(numeros));