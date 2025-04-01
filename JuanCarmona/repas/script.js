//Nivell 1: Conceptes bàsics    

    //Exercici 1

    console.log("Hello world!")

    //Exercici 2

    function calcular() {
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, ingrese números válidos.");
            return;
        }

        document.getElementById("suma").textContent = num1 + num2;
        document.getElementById("resta").textContent = num1 - num2;
        document.getElementById("multiplicacion").textContent = num1 * num2;
        document.getElementById("division").textContent = num1 / num2;
    }

    //Exercici 3

    let number = (10,2);
    let string = ("miau");
    let boolean = true;

    //Exercici 4

    function nombre() {
        let nom = prompt("Ingrese su nombre:");
        let cognom = prompt("Ingrese su apellido:");
        document.getElementById("nombre").textContent = `Hola, ${nom} ${cognom}`;

    }

    //Exercici 5
    function identificar() {
        let numero = parseFloat(prompt("Ingrese un número:"));
        if (numero % 2 === 0) {
            document.getElementById("tipo").textContent = "Par";
        } else {
            document.getElementById("tipo").textContent = "Impar";
        }
    }


//Nivell 2: Control de flujo

    //Exercici 6
    function edad() {
        let edad = parseFloat(prompt("Ingresa la edad:"));
        if (edad < 18) {
            document.getElementById("btnedad").textContent = "Menor";
        } else {
            document.getElementById("btnedad").textContent = "Mayor";
        }
    }

    //Exercici 7
    function numeroMayor() {
        let n1 = parseFloat(prompt("Ingresa el primer número:"))
        let n2 = parseFloat(prompt("Ingresa el segundo número:"))
        let n3 = parseFloat(prompt("Ingresa el tercer número:"))

        let major = Math.max(n1, n2, n3)
        document.getElementById("btnmayor").textContent = major;
    }

    //Exercici 8
    let nPrograma = Math.floor(Math.random() * 100) + 1; 

    function adivinar() {
        let nUsuari = parseInt(prompt("Adivina el número:"));

        if (nUsuari < nPrograma) {
            document.getElementById("btnjuego").textContent = "El número es más grande";
        } else if (nUsuari > nPrograma) {
            document.getElementById("btnjuego").textContent = "El número es más pequeño";
        } else {
            document.getElementById("btnjuego").textContent = "¡Has ganado!";
        }
    }

    //Exercici 9
    function imprimir() {
        let numeros = ""
        for (let i=1; i <= 10; i+= 1) {
            numeros += i + ' ';
        }
        document.getElementById("btnnumeros").textContent = numeros;
    }

    //Exercici 10
    function sumarPares() {
        let suma = 0;
        for (let i = 2; i <= 100; i += 2) {
            suma += i;  
        }
        document.getElementById("sumaPares").textContent = suma;
    }
    
//Nivell 3: Funcions i Arrays

    //Exercici 11
    function sumarArray() {
        let array = [];  
    
        for (let i = 0; i < 5; i++) {
            let numero = parseInt(prompt("Ingresa un número " + (i + 1) + "/5"));
            array.push(numero);  
        }

        let suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
        document.getElementById("sumaArray").textContent = suma;
    }

    //Exercici 12
    function multiplicar(nu1, nu2) {
        return nu1 * nu2;
    }
    
    document.getElementById("btnCalcular").addEventListener("click", function() {
        let nu1 = parseInt(prompt("Ingresa un número:"));
        let nu2 = parseInt(prompt("Ingresa otro número:"));
        let resultado = multiplicar(nu1, nu2);
        document.getElementById("multi").textContent = resultado;
    });
    
    //Exercici 13
    function maxArray() {
        let array2 = [];

        for (let i = 0; i < 5; i++) {
            let numero = parseInt(prompt("Ingresa un número " + (i + 1) + "/5"));
            array2.push(numero);  
        }

        let biggest = Math.max(...array2);
        document.getElementById("maxArray").textContent = biggest;
    }

    //Exercici 14
    function arrayInv() {
        let array3 = [];

        for (let i = 0; i < 5; i++) {
            let numero = parseInt(prompt("Ingresa un número " + (i + 1) + "/5"));
            array3.push(numero);  
        }

        let invert = array3.reverse()
        document.getElementById("invert").textContent = invert;

    }

    //Exercici 15
    function arrayDup () {
        let array4 = [];

        for (let i = 0; i < 5; i++) {
            let numero = parseInt(prompt("Ingresa un número " + (i + 1) + "/5"));
            array4.push(numero);  
        }

        let sinDup = Array.from(new Set(array4));
        document.getElementById("arrayDup").textContent = sinDup;
    }
    
