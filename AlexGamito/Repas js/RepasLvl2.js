// nivell 2 / exercici 1
edat = 4;
if (edat < 18) {
  console.log("és menor");
} else {
  console.log("és major");
}

// nivell 2 / exercici 2
num1 = 5;
num2 = 10;
num3 = 15;

Math.max(num1, num2, num3);

console.log(Math.max(num1, num2, num3));

// nivell 2 / exercici 3
var numSecret = 5;

function EndevinaNumero(numero) {
  if (numSecret > numero) {
    console.log("El número secret és més gran que", numero);
  } else if (numSecret < numero) {
    console.log("El número secret és més petit que", numero);
  } else {
    console.log("Has encertat el número secret", numero);
  }
}
EndevinaNumero(5);

// nivell 2 / exercici 4
for (let i = 0; i < 11; i++) {
  console.log(i);
}

// nivell 2 / exercici 5
var sumaParells = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    sumaParells += i;
  }
}
console.log(sumaParells);