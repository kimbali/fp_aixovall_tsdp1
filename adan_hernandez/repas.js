
// 1. 
console.log('Hola Mundo');

// 2.
let primerNum = parseFloat(prompt("Introdueix el primer número per sumar, restar, multiplicar i dividir:"));
let segonNum = parseFloat(prompt("Introdueix el segon número per sumar, restar, multiplicar i dividir:"));


let suma = primerNum + segonNum;
let resta = primerNum - segonNum;
let multiplicacion = primerNum * segonNum;
let division = segonNum !== 0 ? primerNum / segonNum : "No es pot dividir per 0";

console.log("Primer número: " + primerNum);
console.log("Segon número: " + segonNum);
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicació: " + multiplicacion);
console.log("Divisió: " + division);




// 3.
let nombreEnter = 10;       
let nombreDecimal = 3.14;   
let texte = "Hola";        
let esVeritat = true;      
let esFals = false;        


console.log("nombre enter:", nombreEnter);
console.log("Número decimal:", nombreDecimal);
console.log("Texte:", texte);
console.log("Boolean de veritat:", esVeritat);
console.log("Boolean fals:", esFals);


// 4.
let nom = prompt("Introdueix el teu nom:");
let cognoms = prompt("Introdueix els teus cognoms:");


let nomComplet1 = nom + " " + cognoms;
console.log("El teu nom complet és: " + nomComplet1);


//5
let numero = prompt("Introdueix un altre número per veure si es parell o inparell:");


numero = Number(numero);


if (numero % 2 === 0) {
    console.log(`El número ${numero} és parell.`);
} else {
    console.log(`El número ${numero} és imparell.`);
}



// 6.
function determinarRangEdat(edat) {
    if (edat < 12) {
        return "nen";
    } else if (edat < 18) {
        return "Adolescent";
    } else {
        return "Adult";
    }
}


let edat = parseInt(prompt("Introdueix la teva edat:"));
if (!isNaN(edat)) {
    console.log(`Ets es un ${determinarRangEdat(edat)}.`);
} else {
    console.log("Si us plau, introdueix un número válid.");
}


// 7.
function majorDeTresNumeros(a, b, c) {
    return Math.max(a, b, c);
}

let num1 = parseFloat(prompt("Introdueix el primer número per determinar quin dels tres es mes gran: "));
let num2 = parseFloat(prompt("Introdueix el segon número per determinar quin dels tres es mes gran: "));
let num3 = parseFloat(prompt("Introdueix el tercer número per determinar quin dels tres es mes gran: "));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Si us plau, introdueix números vàlids.");
} else {
    console.log(`El número més gran és: ${majorDeTresNumeros(num1, num2, num3)}`);
}

// 8.

const numeroSecret = Math.floor(Math.random() * 100) + 1;
let intent;
do {
    intent = parseInt(prompt("Endevina el número entre 1 i 100: "));
    if (isNaN(intent)) {
        console.log("Si us plau, introdueix un número vàlid.");
    } else if (intent < numeroSecret) {
        console.log("El número és més gran.");
    } else if (intent > numeroSecret) {
        console.log("El número és més petit.");
    }
} while (intent !== numeroSecret);

console.log("Felicitats! Has endevinat el número.");


// 9.

