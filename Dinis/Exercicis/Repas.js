// - Nivell 1

// - Exercici 1
console.log("hello world");

// - Exercici 2
function calculadora(num1, num2) {
    console.log("Suma: ", num1 + num2);
    console.log("Resta: ", num1 - num2);
    console.log("Multiplicació: ", num1 * num2);
    console.log("Divisió: ", num1 / num2);
}

calculadora(5, 2);

// - Exercici 3
var numero = 1;
var boolean = true;
var string = "Hola";

console.log(numero, boolean, string);

// - Exercici 4
var Nom = "Dinis";
var Cognom = "Medeiros";

console.log(Nom, Cognom);

// - Exercici 5
var num = 5;

if (num % 2 == 0) {
    console.log("El número es parell");
} else {    
    console.log("El número és imparell");
};


// - Nivell 2

// - Exercici 1
var edat = 25;

if (edat <= 12) {
    console.log("La persona és un nen");
} else if (edat <= 18) {
    console.log("La persona és un adolescent");
} else {
    console.log("La persona és un adult");
}

// - Exercici 2
function MajorDeTres(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        console.log("El número més gran és: ", numero1);
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log("El número més gran és: ", numero2);
    } else {
        console.log("El número més gran és: ", numero3);
    }
}

MajorDeTres(5, 10, 15);

// - Exercici 3
var numSecret = 5;

function AdivinaNumero(numero) {
    if (numeroSecret > numero) {
        console.log("El número secret és més gran que ", numero);
    } else if (numeroSecret < numero) {
        console.log("El número secret és més petit que ", numero);
    }
    else {
        console.log("Has encertat el número secret");
    }
}

AdivinaNumero(5);


