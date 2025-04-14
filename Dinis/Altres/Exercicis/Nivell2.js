// - Nivell 2

// - Exercici 6
var edat = 25;

if (edat <= 12) {
    console.log("Ex. 6: La persona és un nen");
} else if (edat <= 18) {
    console.log("Ex. 6: La persona és un adolescent");
} else {
    console.log("Ex. 6: La persona és un adult");
}

// - Exercici 7
function MajorDeTres(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        console.log("Ex. 7: El número més gran és: ", numero1);
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log("Ex. 7: El número més gran és: ", numero2);
    } else {
        console.log("Ex. 7: El número més gran és: ", numero3);
    }
}

MajorDeTres(5, 10, 15);

// - Exercici 8
var numSecret = 5;

function AdivinaNumero(numero) {
    if (numSecret > numero) {
        console.log("Ex. 8: El número secret és més gran que ", numero);
    } else if (numSecret < numero) {
        console.log("Ex. 8: El número secret és més petit que ", numero);
    }
    else {
        console.log("Ex. 8: Has encertat el número secret");
    }
}

AdivinaNumero(5);

// - Exercici 9
for (var i = 1; i <= 10; i++) {
    console.log("Ex. 9: ", i);
}

// - Exercici 10
var suma = 0;

for (var i = 2; i <= 100; i += 2) {
    suma += i;
}

console.log("Ex. 10: La suma de tots los numeros pars del 1 al 100: ", suma);