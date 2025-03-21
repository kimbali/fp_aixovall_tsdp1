//nivel 3 /exercici 1
array = [0,1,2,3,4,5,6,7,8,9,10];

function sumaArray(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}
console.log(sumaArray(array));

//nivel 3 /exercici 2
num1 = 5;
num2 = 6;

function multiplicapara(num1, num2){
    let resultado = 0;
    for (let i = 0; i < num2; i++){
        resultado += num1;
    }
    return resultado;
}
console.log(multiplicapara(num1, num2));

//nivel 3 /exercici 3
Math.max(...array);
console.log(Math.max(...array));

//nivel 3 /exercici 4
array.reverse()
console.log(array);

//nivel 3 /exercici 5
Array.from(new setInterval(array));
console.log(Array.from(new setInterval(array)));
