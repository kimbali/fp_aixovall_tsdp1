//1)

// Exercici 1

console.log("Hola Mundo");

// Exercici 2

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log("División:", num1 / num2);

// Exercici 3

let numero = 94;
let string = "Hola ximi";
let booleano = true;

console.log("Número:", numero);
console.log("String:", string);
console.log("Booleano:", booleano);

// Exercici 4

let nombre = prompt("Ingrese su nombre:");
let apellidos = prompt("Ingrese sus apellidos:");
let nombreCompleto = nombre + " " + apellidos;

console.log("Nombre completo (concatenado):", nombreCompleto);
console.log(`Nombre completo (template literal): ${nombre} ${apellidos}`);

// Exercici 5

let numeroEvaluar = parseInt(prompt("Ingrese un número para saber si es par o impar:"));

if (numeroEvaluar % 2 === 0) {
  console.log(`El número ${numeroEvaluar} es par`);
} else {
  console.log(`El número ${numeroEvaluar} es impar`);
}



//2)

// Exercici 6

let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 0 && edad <=12){
    console.log("Es un niño");
} 
    else if (edad >= 13 && edad <==17){
    console.log("Es un adolecente");
    }
        else if (edad >= 18 && edad <==59){
        console.log("Es un adulto");
        }
            else if (edad >= 60 && edad <==99){
  console.log("Es un anciano");
}
// Exercici 7 



