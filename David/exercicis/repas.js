//Exercici 1
console.log("Hello World!")


//Exercici 2

function calculadora(num1, num2) {
    console.log(num1)
    console.log(num2)
}

calculadora(2, 5)


//Exercici 3

let edad = 25;           
let nombre = "Ana";      
let esEstudiante = true; 

console.log(`Edad: ${edad}, Nombre: ${nombre}, Estudiante: ${esEstudiante}`);


//Exercici 4

let name = prompt("Introduce tu nombre:");
let apellidos = prompt("Introduce tus apellidos:");

let nombreCompleto = `${nombre} ${apellidos}`;
console.log(`Tu nombre completo es: ${nombreCompleto}`);


//Exercici 5
let numero = parseInt(prompt("Introduce un número:"));

if (numero % 2 === 0) {
    console.log(`${numero} es par.`);
} else {
    console.log(`${numero} es impar.`);
}

//NIVELL 2 
//Exercici 6
let edat = parseInt(prompt("Su edad es de:"));

if (edat < 18) {
    console.log("Es menor de edat");
} else {
    console.log("Es major de edat");
}

//Exercici 7
let num1 = parseInt(prompt("Introduce un número:"));
let num2 = parseInt(prompt("Introduce otro número:"));
let num3 = parseInt(prompt("Introduce un tercer número:"));

console.log(`El número más grande es: ${Math.max(num1, num2, num3)}`);

//Exercici 8

