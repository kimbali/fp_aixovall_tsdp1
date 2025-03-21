// Ejercicio 1
console.log("Hola Mundo");

// Ejercicio 2
function calculadora(num1, num2) {
    console.log("Suma: ", num1 + num2);
    console.log("Resta", num1 - num2);
    console.log("Multiplicacion" , num1 * num2);
    console.log("Division", num1 / num2);
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
function multiplicacion(a, b){
    return a * b;
}
