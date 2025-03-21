// Ejercicio 1
console.log("Hola Mundo");

// Ejercicio 2
function calculadora(num1, num2) {
    console.log("Suma: ", num1 + num2);
    console.log("Resta: ", num1 - num2);
    console.log("Multiplicacion: " , num1 * num2);
    console.log("Division: ", num1 / num2);
}
calculadora(5,5);

// Ejercicio 3
let boolean = true;
console.log("Esta es una variable boolean: ", boolean);
let string = "este es un string"
console.log("Esta es una variable string:", string);
let int = 5;
console.log("Esta es una variable int", int);

// Ejercicio 4
let nombre = "Santiago";
let apellido = "Bisceglia";
console.log("Tu nombre y apellido es:", nombre, apellido);

//Ejercicio 5
let num = 6;

if(num % 2 === 0){
    console.log("par");
} else {
    console.log("Impar");
}

// Ejercicio 6
let edad = 10;

if(edad <= 10){
    console.log("Es un niño");
}else if (edad <= 18) {
    console.log("Es un adolescente")
} else if (edad <= 25) {
    console.log("adulto")
}

// Ejercicio 7
let numbers = Math.max(8,2,10);
console.log("El numero mas grande es: ", numbers);

// Ejercicio 8

/* const numeroSecreto = Math.floor(Math.random()*100)+1;
let intento;
do{
    intento = prompt("Adivina el numero (1-100):");
    alert(intento > numeroSecreto ? "Menor" : intento < numeroSecreto ? "Mayor" : "correcto");

} while (intento != numeroSecreto); */

// Ejercicio 9

for (let i = 1; i < 11; i++) {
    console.log(i)
}

// Ejercicio 10
let suma = 0;
for (let a = 2; a <= 100; a +=2) {
    suma +=a
}
console.log(suma);

// Ejercicio 11
let total=0;
let numeros = [1, 2, 3, 4, 5];
for(let i = 0; i < numeros.length; i++) {
    total += numeros[i];
    
}
console.log("La suma de numeros es: ", total);

// Ejercicio 12
function multiplicacion(num1, num2){
    return num1 * num2;
}
let resultado = multiplicacion(5, 2);
console.log("La multiplicacion es:", resultado);

// Ejercicio 13
let array = [1,2,3,5,42,32,7754];
console.log(Math.max(...array));

// Ejercicio 14
let lista = [1,2,3,4,5];
lista.reverse()
console.log("La lista es:", lista);

// Ejercicio 15
let duplicado = ["pan", "pan", "helado", "manzana"];
function eliminarDuplicados(array){
    return [...new Set(array)];
}
console.log(eliminarDuplicados(duplicado));

// Ejercicio 16
const persona = {
    nombre: "jorge",
    edad: 30,
    ciudad: "Andorra la vella"
};
function saludo(persona) {
    console.log(`Hola mi nombre es ${persona.nombre}, tengo ${persona.edad} años, y vivo en ${persona.ciudad}`);   
}
saludo(persona);

// Ejercicio 17
function contarVocales(cadena){
    return cadena
    .toLowerCase()
    .split("")
    .filter(letra => "aeiou".includes(letra)).length;
}
console.log(contarVocales("Hola como estas"));

// Ejercicio 18
let nums = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = nums.filter(num => num % 2 === 0);
console.log(numerosPares);

// Ejercicio 19
let frutas = ['manzana', 'anana', 'pera', 'banana'];
console.log(frutas.sort());

// Ejercicio 20 Esta la busque
function calcularPromedio(numeros){
    if(numeros.length === 0) return 0;
    let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / numeros.length;
}
let valores = [10,20,30,40,50];
console.log(calcularPromedio(valores));

// Ejercicio 21
const estudiantes = [
    { nombre: "Ana", calificacion: 8 },
    { nombre: "Luis", calificacion: 6 },
    { nombre: "María", calificacion: 9 },
    { nombre: "Carlos", calificacion: 5 },
    { nombre: "Elena", calificacion: 7 }
];
function filtrarAprobados(estudiantes) {
    return estudiantes.filter(estudiante => estudiante.calificacion >= 5);
}
const aprobados = filtrarAprobados(estudiantes);
console.log(aprobados);

// Ejercicio 22
// Ejemplo funcion anonima
const prueba = function(a, b) {
    return a + b;
}
console.log(prueba);

// Ejemplo arrow function
const prueba2 = (a, b) => a + b;
console.log(prueba2);

// Ejercicio 23
class Coche {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarInfo(){
        return `coche: ${this.marca} ${this.modelo}, año: ${this.año}`;
    }
}
const miCoche = new Coche("Toyota", "Yaris", 2022);
const coches = new Coche("Lamborghini", "Urus", 2025);
console.log(miCoche.mostrarInfo());
console.log(coches.mostrarInfo());

// Ejercicio 24
/* function procesoAsincrono() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Proceso completado"), 2000)
    });
}
procesoAsincrono().then(mensaje => console.log(mensaje)); */

// Ejercicio 25

// Cambiar color fondo random
let boton = document.getElementById("boton");
function cambiarColor() {
    const colores = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1"];
    const colorAleatorio = colores[Math.floor(Math.random()*colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
boton.addEventListener("click", cambiarColor);

// Volver color fondo a blanco
let boton2 = document.getElementById("boton2");
function colorOriginal(){
    document.body.style.background = "#FFFFFF";
}
boton2.addEventListener("click", colorOriginal);
