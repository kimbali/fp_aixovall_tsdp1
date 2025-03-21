const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (num) => {
    console.log(`El número introducido es: ${num}`);
    rl.close();
});
