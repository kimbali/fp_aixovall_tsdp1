

console.log("hola mon")


function calculadora(num1, num2) {

    
    console.log(`Suma: ${num1 + num2}`);
    console.log(`Resta: ${num1 - num2}`);
    console.log(`Multiplicación: ${num1 * num2}`);
    console.log(`División: ${num2 !== 0 ? num1 / num2 : "No se puede dividir por cero"}`);
}
calculadora(5,6)

// Variables y Tipos de Datos
let numero = 10;
let texto = "Hola";
let booleano = true;
console.log(numero, texto, booleano);

// Concatenación de Cadenas
let nombre = prompt("Introduce tu nombre:");
let apellido = prompt("Introduce tu apellido:");
console.log(`Nombre completo: ${nombre} ${apellido}`);

// Condicionales: Par o Impar
let numeroPar = parseInt(prompt("Introduce un número:"));
if (numeroPar % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

// Nivel 2: Control de Flujo

// Rango de Edad
let edad = parseInt(prompt("Introduce tu edad:"));
if (edad < 12) {
    console.log("Eres un niño");
} else if (edad < 18) {
    console.log("Eres un adolescente");
} else {
    console.log("Eres un adulto");
}

// Adivina el Número
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;
do {
    intento = parseInt(prompt("Adivina el número (1-100):"));
    if (intento > numeroSecreto) {
        console.log("El número es menor");
    } else if (intento < numeroSecreto) {
        console.log("El número es mayor");
    } else {
        console.log("¡Correcto!");
    }
} while (intento !== numeroSecreto);

// Bucle For: Imprimir números 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Suma de Números Pares (1-100)
let suma = 0;
for (let i = 2; i <= 100; i += 2) {
    suma += i;
}
console.log(`Suma de pares: ${suma}`);

// Nivel 3: Funciones y Arrays

// Suma de Elementos de un Array
function sumaArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumaArray([1, 2, 3, 4, 5]));

// Multiplicación con Función
const multiplicar = (x, y) => x * y;
console.log(multiplicar(3, 4));


// Encontrar el Número Más Grande
function maxArray(arr) {
    return Math.max(...arr);
}
console.log(maxArray([10, 5, 8, 20, 15]));


// Invertir un Array
function invertirArray(arr) {
    return arr.reverse();
}
console.log(invertirArray([1, 2, 3, 4, 5]));

// Eliminar Elementos Duplicados
function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));

// Nivel 4: Objetos y Más Funciones

// Propiedades de un Objeto
const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}`);

// Contador de Vocales
function contarVocales(cadena) {
    return cadena.split('').filter(letra => "aeiouAEIOU".includes(letra)).length;
}
console.log(contarVocales("Hola Mundo"));

// Filtrar Números Pares
const filtrarPares = (arr) => arr.filter(num => num % 2 === 0);
console.log(filtrarPares([1, 2, 3, 4, 5, 6]));

// Ordenar un Array
const ordenarArray = (arr) => arr.sort((a, b) => a - b);
console.log(ordenarArray([5, 3, 8, 1, 2]));

// Calculadora de Promedio
const promedio = (arr) => arr.reduce((acc, num) => acc + num, 0) / arr.length;
console.log(promedio([10, 20, 30, 40, 50]));


// Nivel 5: Conceptos Avanzados

// Array de Objetos y Filtro
const estudiantes = [
    { nombre: "Ana", calificacion: 9 },
    { nombre: "Luis", calificacion: 6 },
    { nombre: "Carlos", calificacion: 7 }
];
console.log(estudiantes.filter(est => est.calificacion >= 7));

// Clases y Objetos
class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;}
}
const miCoche = new Coche("Toyota", "Corolla", 2022);
console.log(miCoche);

// Promesas con setTimeout
const promesaDemo = () => new Promise(resolve => setTimeout(() => resolve("Proceso completado"), 2000));
promesaDemo().then(console.log);

// Manipulación del DOM
const boton = document.createElement("button");
boton.innerText = "Cambiar color";
boton.addEventListener("click", () => document.body.style.backgroundColor = "lightblue");
document.body.appendChild(boton);