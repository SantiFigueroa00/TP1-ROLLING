let n1 = parseInt(prompt('Ingrese un numero:'));

if((n1%2)===0 || (n1%3)===0 || (n1%5)===0 || (n1%7)===0){
    document.write(`El numero ${n1} es divisible por 2, 3, 5 o 7`);
}else{
    document.write(`El numero ${n1} NO es divisible por ninguno de estos numeros: 2, 3, 5 y 7`);
}