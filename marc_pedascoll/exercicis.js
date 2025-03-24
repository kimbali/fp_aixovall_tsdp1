console.log('Hola món!');
let btn=document.getElementById('btn');
let btn3=document.getElementById('btn3');
function operate(){
    let num1=prompt('Demanar numero');
    let num2=prompt('Demanar número');
    let suma=parseFloat(num1)+parseFloat(num2);
    let resta=parseFloat(num1)-parseFloat(num2);
    let multi=parseFloat(num1)*parseFloat(num2);
    let div;
    if(num2!=0){
    div=parseFloat(num1)/parseFloat(num2);}else{div="No es pot fer"}
    console.log('La suma es: '+suma);
    console.log('La resta es: '+resta);
    console.log('La multiplicació es: '+multi);
    console.log('La divisió es: '+div);
}
console.log('ex3');
let x=5;
let y=true;
let z="Hola";
console.log(x+y+z);
function exercici4(){
    let inputNum3=document.getElementById('num3');
    let inputNum4=document.getElementById('num4');
    let num3=inputNum3.value;
    let num4=inputNum4.value;
    console.log(num3+" "+num4);
}
function exercici5(){
    let inputNum5=document.getElementById('num5');
    let num5=inputNum5.value;
    if(num5%2===0){console.log('El número es parell');}
    else{console.log('El número es senar');}
}

function exercici6(){
    let inputNum6=document.getElementById('num6');
    let num6=inputNum6.value;
    if(num6>=0&&num6<12){console.log('Nen');}else if(num6>=12&&num6<18){console.log('Adolescent');}else if(num6>=18){console.log('Adult');}else{console.log('tonto');}
}
function exercici7(){
    let inputNum7=document.getElementById('num7');
    let num7=inputNum7.value;
    let inputNum8=document.getElementById('num8');
    let num8=inputNum8.value;
    let inputNum9=document.getElementById('num9');
    let num9=inputNum9.value;
    console.log(num7+" "+num8+" "+num9);
    if(num7>num8&&num7>num9){console.log('El número més gran es: '+num7);}else if(num8>num7&&num8>num9){console.log('El número més gran es: '+num8);}else if(num9>num7&&num9>num8){console.log('El número més gran es: '+num9);}else{console.log('tonto');}
    console.log(Math.max(num7, num8, num9));
};
function exercici8(){
    console.log('ex8!')
    let randomNum=Math.floor(Math.random()*11);
    console.log(randomNum);
    let numberGuess=0
    while(numberGuess!=-1){
        numberGuess=parseInt(prompt('Number guess 0-10:'));
        if(numberGuess==randomNum){console.log('correct!');numberGuess=-1}else{console.log('try again :C');}
    }
}
function exercici9(){
    console.log('ex9!');
    for(let i=0;i<=10;i++){
        console.log(i);
    }
}
function exercici10(){
    console.log('ex10!');
    for(let i=0;i<=10;i++){
        if(i%2===0){console.log(i)}
    }
}
function exercici11(){
    let stuff=[];
    console.log('ex11!');
    let inputMan=parseInt(prompt('Array length?'));
    inputMan--;
    for(let i=0;i<=inputMan;i++){
        stuff[i]=prompt(`Value wanted in position ${i}`)
    }
    console.log(stuff);
}

const nuBtn=document.getElementById('nuBtn');
const buBtn2=document.getElementById('nuBtn2');
const nuBtn3=document.getElementById('nuBtn3');
const nuBtn4=document.getElementById('nuBtn4');
nuBtn.addEventListener('click', exercici8);
nuBtn2.addEventListener('click', exercici9);
nuBtn3.addEventListener('click', exercici10);
nuBtn4.addEventListener('click', exercici11);