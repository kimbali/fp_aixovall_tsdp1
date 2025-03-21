// - Nivell 5

// Exercici 21
let arrayEstudiants = [
    {nom: 'Dinis', nota: 4},
    {nom: 'Pol Chato', nota: 2},
];

// let arrayFiltrat = arrayEstudiants.filter(nom => estudiant.nota > 7)
// console.log("Ex. 21", arrayFiltrat);

// Exercici 22
const Suma = function (a, b) {
    return a + b;
}

const sum = (a, b) => a + b;

// Exercici 23
class Cotxe {
    constructor(marca, model, any) {
        this.marca = marca;
        this.model = model;
        this.any = any;
    }
}

const Cotxe1 = new Cotxe('Rolls Royce', 'Phantom', 2021);
console.log(`Ex. 23: Marca: ${Cotxe1.marca}, Model: ${Cotxe1.model}, Any: ${Cotxe1.any}`);

// Exercici 24
function ProcessAsincro() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Ex. 24: Proces asincron acabat'), 2000);
    });
}
ProcessAsincro().then(missatje => console.log(missatje));

// Exercici 25
// Exercici 25
<button id="Boto">Botó</button>

document.getElementById('Boto').addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
});