// script.js

// 1. Objetos y Arrays Combinados
const estudiantes = [
    { nombre: "Ana", calificacion: 8 },
    { nombre: "Luis", calificacion: 6 },
    { nombre: "Sofia", calificacion: 9 },
    { nombre: "Carlos", calificacion: 5 }
];
function filtrarAprobados(estudiantes) {
    return estudiantes.filter(estudiante => estudiante.calificacion >= 7);
}

// 2. Funciones Anónimas y Arrow Functions
const suma = function(a, b) { return a + b; };
const sumaArrow = (a, b) => a + b;

// 3. Clases y Objetos
class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarInfo() {
        return `Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`;
    }
}
const miCoche = new Coche("Toyota", "Corolla", 2022);

// 4. Promesas
function procesoAsincrono() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Proceso completado"), 2000);
    });
}
procesoAsincrono().then(mensaje => console.log(mensaje));

// 5. Manipulación del DOM (botón para cambiar color de fondo)
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.createElement("button");
    boton.id = "boton";
    boton.textContent = "Cambiar color";
    document.body.appendChild(boton);
    boton.addEventListener("click", () => {
        document.body.style.backgroundColor = "lightblue";
    });
});

// Ejemplos de uso en la consola
console.log("Estudiantes aprobados:", filtrarAprobados(estudiantes));
console.log("Suma de 3 y 4:", suma(3, 4));
console.log("Suma Arrow de 3 y 4:", sumaArrow(3, 4));
console.log(miCoche.mostrarInfo());
