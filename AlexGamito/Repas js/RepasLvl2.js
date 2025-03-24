//nivel 2 /exericie 1
edat = 4;
if (edat < 18) {
  console.log("es menor");
} else {
  console.log("es major");
}

//nivel 2 /exericie 2
num1 = 5;
num2 = 10;
num3 = 15;

Math.max(num1, num2, num3);

console.log(Math.max(num1, num2, num3));

//nivel 2 /exericie 3
var numSecret = 5;

function AdivinaNumero(numero) {
  if (numSecret > numero) {
    console.log(" El número secret és més gran que ", numero);
  } else if (numSecret < numero) {
    console.log("El número secret és més petit que ", numero);
  } else {
    console.log("Has encertat el número secret", numero);
  }
}
AdivinaNumero(5);

//nivel 2 /exericie 4

for (let i = 0; i < 11; i++) {
  console.log(i);
}

//nivel 2 /exericie 5
var sumapares = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    sumapares += i;
  }
}
console.log(sumapares);