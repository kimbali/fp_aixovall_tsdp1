function play(userChoice) {
    let choices = ['piedra', 'papel', 'tijera'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'Empate';
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = 'Ganaste';
    } else {
        result = 'Perdiste';
    }

    document.getElementById('result').innerText = `Elegiste: ${userChoice}. Computadora eligió: ${computerChoice}. Resultado: ${result}`;
}
