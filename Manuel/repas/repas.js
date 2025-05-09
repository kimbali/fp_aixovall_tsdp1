//nivell 1//

//1//
console.log('hello world')

//2//
let num1= 1
let num2= 4
operacion = ""
function calcular (num1,num2,operacion){
let suma = num1+num2
let resta =num1-num2
let multiplicacio = num1*num2
let divisio = num1/num2

if(operacion === sumaO){
    console.log(suma)
} else if(operacion===restaO){
    console.log(resta)
} else if(operacion===multiplicacioO){
    console.log(multiplicacio)
} else {
    console.log(divisio)
}

}



//3//
let string = ('hola')
let num = 1
let precio = 8.8


//5//
let numero_aleatorio = 8

if(numero_aleatorio %2 === 0) {
    console.log("numero par")
} else{
    console.log("el numero es impar")
};

//nivell 2//
//6//
function edad(){
    let edad_usuario = 50

    if(edad_usuario>= 11){
        console.log("niño")
    } else if(edad_usuario>= 12 && edad_usuario<=18){
        console.log("adolescente")
    } else if(edad_usuario>=19 && edad_usuario<=26){
        console.log("juventud")
    } else if(edad_usuario>=27 && edad_usuario<=59){
        console.log("adult")
    } else{
        console.log("persona mayor")
    }
}

//7//
function order(){
    let numero1 = 6
    let numero2 = 3
    let numero3 = 19

    if(numero1>numero2 && numero1>numero3){
        console.log("el numero mas grande es :"+numero1)
    } else if(numero2>numero1 && numero2>numero3){
        console.log("el numero mas grande es :"+numero2)
    } else{
        console.log("el numero mas grande es : "+numero3)
    }

}

//8//
function adivinar (){
    let numeroSistema = Math.random(1,101)
    let numeroUsuario = 60

    if(numeroSistema===numeroUsuario){
        console.log("Has hacertado el numero era : "+numeroSistema)
    } else if (numeroSistema>numeroUsuario){
        console.log("el numero es mas grande que : "+numeroUsuario)
    } else{
        console.log("el numero es mas pequeño que : "+numeroUsuario)
    }
}
//9//
function bucle (){
    let inicio = 1
    let maximo = 2
    for(let i =inicio; i <= maximo; i++){
    console.log(i)
}
}
//10//
function bucle_par(){
    let suma = 0

    for (let i = 1; i<=100; i++){
        if (i % 2 === 0){
            suma +=i;
        }
    }
    console.log("la suma de los numeros pares del 1 al 100 es: "+suma)
}

//nivell 3//

//11//
function sumaArray (Array){
   return  Array.reduce ((acumulador, elemento) => acumulador + elemento,0);
    }
const numeros =[1,2,3,4,5];
const suma_array =sumaArray(numeros);
console.log(suma_array)

//12//
function multiplicacionF (param1,param2){
    return param1 * param2
}
const resultado = multiplicacionF(5,4);
console.log(resultado)



//13//
function elemento_grande (Array){
    return Math.max(...Array);
    }

    const numeros_grande = [1,2,2,5,7,3,9];
    const mayor = elemento_grande(numeros_grande);
    console.log(mayor);





function inversion_array (Array){
    return Array.reverse()
}
const numeros_inversion = [1,2,3,4,5,6,7,8];
const invertido = inversion_array(numeros_inversion);
console.log(invertido)
console.log(numeros_inversion)





function delete_duplicate (Array){
    return [...new set(Array)];
}

const numeros_eliminar_duplicado = [1,2,2,2,3,4,5,5,5,6,7,6,7]
const sin_duplicar = delete_duplicate(numeros_eliminar_duplicado)
console.log(sin_duplicar)


//nivell 4//

//16//

const persona ={
    nombre: "Poilo",
    edad: "20",
    ciudad: "torremolinos"
}
console.log("bienvenido señor "+persona.nombre+"de edad "+persona.edad+"de procedencia :"+persona.ciudad)

//17//

function contador_de_vocales(Array){
    let contador = 0;
    const vocales ="aeiou";

    for(let i=0;i< cadena.length; i++){
        if (vocales.includes(cadena[i].toLoweCase())){
            contador++
        }
    }
    return contador;
}
const texto = "hola mundo";
const cantidad_vocales = contador_de_vocales(texto)
console.log(cantidad_vocales)

//18//

function pares (numeros){
     return Array.filter(numero => numero % 2 === 0)
}
const numeros_ordenar = [1,1,1,2,3,6,7,8,8,9,9,3]
const numerosPares = pares(numeros_ordenar)
console.log(numerosPares)

//19//

function ordenar (numeros){
    return numeros.sort((a,b) => a-b)
}
const numeros_normales = [1,1,2,7,8,74,3,5,8,2]
const numeros_ascendentes = ordenar(numeros_normales)
console.log(numeros_ascendentes)

//20//

function calcularPromedio(arr) {
    if (arr.length === 0) return 0; 
    const suma = arr.reduce((acc, num) => acc + num, 0); 
    return suma / arr.length; 
  }
  
  const numerospromedio = [6, 8, 7, 9, 10]; 
  console.log(calcularPromedio(numerospromedio)); 
  


//nivell 5 //

//21//


const estudiantes =[{
    nom: "juan", calificacion : 4,
    nom: "arnau", calificacion : 1,
    nom: "pedro", calificacion : 10,
    nom: "pol", calificacion : 5,
    nom: "marta", calificacion : 8,
}]

function filtrarEstudiantes (arr,calificacioMinima){
    return arr.filter(estudiante => estudiante.calificacion >= calificacioMinima)
}
const estudiantesAprobados = filtrarEstudiantes(estudiantes,5)
console.log(estudiantesAprobados)

//22//

const sumaAnonima = (a,b) => a+b; 

//23//


class Coche {
    
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  }
  
  
  const miCoche = new Coche('Toyota', 'Corolla', 2020);
  
  
  console.log('Marca:', miCoche.marca); 
  console.log('Modelo:', miCoche.modelo); 
  console.log('Año:', miCoche.año); 
  

  //24//



function procesoAsincrono() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = true; 
        if (exito) {
          resolve('Proceso completado con éxito');
        } else {
          reject('Hubo un error en el proceso');
        }
      }, 2000); 
    });
  }
  
  
  procesoAsincrono()
    .then((resultado) => {
      console.log(resultado); 
    })
    .catch((error) => {
      console.error(error); 
    });
  


    //26//

 const uno =document.getElementById(1)
const dos =document.getElementById(2)
const tres =document.getElementById(3)
const  cuatro =document.getElementById(4)
const cinco =document.getElementById(5)
const seis =document.getElementById(6)
const siete =document.getElementById(7)
const ocho =document.getElementById(8)
const nueve =document.getElementById(9)
const cero = document.getElementById(0)
const suma = document.getElementById("+")
const resta = document.getElementById("-")
const multiplicacioBoton =document.getElementById("x")
const divisionBoton =document.getElementById("/")
const resultat =document.getElementById("=")
