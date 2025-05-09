function calcular(operacion) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = 'Por favor ingrese dos números válidos.';
        return;
    }

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('resultado').textContent = 'No se puede dividir entre cero.';
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            document.getElementById('resultado').textContent = 'Operación no válida';
            return;
    }

    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}


function jugar(eleccion) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    let resultado = '';

    if (eleccion === eleccionComputadora) {
        resultado = 'Es un empate.';
    } else if (
        (eleccion === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccion === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccion === 'tijera' && eleccionComputadora === 'papel')
    ) {
        resultado = '¡Ganaste!';
    } else {
        resultado = 'Perdiste, la computadora eligió ' + eleccionComputadora + '.';
    }

    document.getElementById('resultado-juego').textContent = 'Computadora eligió: ' + eleccionComputadora + '. ' + resultado;
}


function convertir(tipo) {
    let temperatura = parseFloat(document.getElementById('temperatura').value);
    let resultado = '';

    if (isNaN(temperatura)) {
        document.getElementById('resultado-temp').textContent = 'Por favor ingrese una temperatura válida.';
        return;
    }

    if (tipo === 'C') {
        resultado = (temperatura - 32) * (5 / 9);
        document.getElementById('resultado-temp').textContent = temperatura + '°F = ' + resultado.toFixed(2) + '°C';
    } else if (tipo === 'F') {        
        resultado = (temperatura * 9 / 5) + 32;
        document.getElementById('resultado-temp').textContent = temperatura + '°C = ' + resultado.toFixed(2) + '°F';
    }
}


let tiempo = 0;
let intervalo;
   
function iniciarCronometro() {
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => {
        tiempo++;
        let minutos = Math.floor(tiempo / 60);
        let segundos = tiempo % 60;
        document.getElementById('cronometro').textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    }, 1000);
}

function pausarCronometro() {
    clearInterval(intervalo);
}

function resetearCronometro() {
    clearInterval(intervalo);
    tiempo = 0;
    document.getElementById('cronometro').textContent = '00:00';
}


document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;
    let error = '';

    if (nombre === '') {
        error = 'El nombre es obligatorio.';
    } else if (correo === '') {
        error = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        error = 'Por favor ingrese un correo electrónico válido.';
    } else if (mensaje === '') {
        error = 'El mensaje no puede estar vacío.';
    }

    if (error) {
        document.getElementById('error-formulario').textContent = error;
    } else {
        document.getElementById('error-formulario').textContent = '';
        alert('Formulario enviado con éxito');
        document.getElementById('formulario').reset(); // Limpiar el formulario
    }
});
 