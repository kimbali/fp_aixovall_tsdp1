let botones = document.getElementsByClassName("botones");
let arrayBotones = Array.from(botones);
let textbox = document.getElementById("textbox");
let num1 = null; num2 = null; operacion = null;
let resultadoOperacion;

suma = (a, b)=>{
    return (Number(a)+Number(b));
};

resta = (a, b)=>{
    return (Number(a)-Number(b));
};

multiplicacion = (a, b)=>{
    return (Number(a)*Number(b));
};

division = (a, b)=>{
    return (Number(a)/Number(b));
};

Operacion = (event) => {
    let tecla = event.target.textContent;

    if (tecla === "+" || tecla === "-" || tecla === "x" || tecla === "÷") {
        num1 = textbox.value;
        operacion = tecla;
        textbox.value = "";
    } else if (tecla === "=") {
        num2 = textbox.value;
        if(operacion && num1 !== null) {
            if(operacion === "+") {
                resultadoOperacion = suma(num1, num2);
            } else if (operacion === "-") {
                resultadoOperacion = resta(num1, num2);
            } else if (operacion === "x") {
                resultadoOperacion = multiplicacion(num1, num2);
            } else if (operacion === "÷") {
                resultadoOperacion = division(num1, num2);
            }
            textbox.value = resultadoOperacion;
            num1 = null;
            num2 = null;
            operacion = null;
        }
    } else if (tecla === "C") {
        textbox.value = "";
        num1 = null;
        num2 = null;
        operacion = null;
    
    } else {
        textbox.value += tecla;
    }
};
for (let i = 0; i < arrayBotones.length; i ++) {
    arrayBotones[i].addEventListener("click", Operacion);
}