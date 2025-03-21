// Hola Mundo
console.log("Hola Mundo");

// Operaciones Aritméticas
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

console.log(`Suma: ${num1 + num2}`);
console.log(`Resta: ${num1 - num2}`);
console.log(`Multiplicación: ${num1 * num2}`);
console.log(`División: ${num1 / num2}`);

// Variables y Tipos de Datos
let numero = 42;
let texto = "Hola";
let booleano = true;

console.log(`Número: ${numero}`);
console.log(`Texto: ${texto}`);
console.log(`Booleano: ${booleano}`);

// Concatenación de Cadenas
let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
console.log(`Nombre completo: ${nombre} ${apellido}`);

// Condicionales (Par o Impar)
let numeroParImpar = parseFloat(prompt("Ingresa un número:"));
if (numeroParImpar % 2 === 0) {
    console.log(`${numeroParImpar} es un número par.`);
} else {
    console.log(`${numeroParImpar} es un número impar.`);
}
