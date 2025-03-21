// Rango de Edad
function determinarRangoEdad() {
    let edad = parseInt(prompt("Ingresa tu edad:"));

    if (edad < 12) {
        alert("Eres un niño.");
    } else if (edad >= 12 && edad < 18) {
        alert("Eres un adolescente.");
    } else {
        alert("Eres un adulto.");
    }
}

// Mayor de Tres Números
function mayorDeTresNumeros() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let num3 = parseFloat(prompt("Ingresa el tercer número:"));

    let mayor = Math.max(num1, num2, num3);
    alert(`El número mayor es: ${mayor}`);
}

// Adivina el Número
function adivinaElNumero() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intento;
    
    do {
        intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
        if (intento > numeroSecreto) {
            alert("El número es menor.");
        } else if (intento < numeroSecreto) {
            alert("El número es mayor.");
        }
    } while (intento !== numeroSecreto);

    alert("¡Felicidades! Adivinaste el número.");
}

// Bucle "for" (Imprimir números del 1 al 10)
function imprimirNumeros() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + " ";
    }
    alert(`Números del 1 al 10:\n${resultado}`);
}

// Suma de Números Pares del 1 al 100
function sumarNumerosPares() {
    let suma = 0;
    for (let i = 2; i <= 100; i += 2) {
        suma += i;
    }
    alert(`La suma de los números pares del 1 al 100 es: ${suma}`);
}
