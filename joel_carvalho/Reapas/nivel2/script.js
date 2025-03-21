function ejecutarEjercicio() {
    let opcion = document.getElementById("ejercicio").value;
    let resultado = document.getElementById("resultado");

    switch (opcion) {
        case "holaMundo":
            resultado.textContent = "Hola Mundo";
            break;
        case "operaciones":
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            resultado.innerHTML = `Suma: ${num1 + num2} <br> Resta: ${num1 - num2} <br> Multiplicación: ${num1 * num2} <br> División: ${num1 / num2}`;
            break;
        case "tiposDatos":
            let numero = 10;
            let texto = "Hola";
            let booleano = true;
            resultado.innerHTML = `Número: ${numero} <br> Texto: ${texto} <br> Booleano: ${booleano}`;
            break;
        case "concatenacion":
            let nombre = prompt("Ingrese su nombre:");
            let apellido = prompt("Ingrese su apellido:");
            resultado.textContent = `Nombre completo: ${nombre} ${apellido}`;
            break;
        case "parImpar":
            let numeroParImpar = parseInt(prompt("Ingrese un número:"));
            resultado.textContent = numeroParImpar % 2 === 0 ? "Es un número par" : "Es un número impar";
            break;
        default:
            resultado.textContent = "Seleccione un ejercicio";
    }
}
