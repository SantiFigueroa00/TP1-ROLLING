let n1 = parseInt(prompt('Ingrese un primer numero:'));
let n2 = parseInt(prompt('Ingrese un segundo numero:'));
let n3 = parseInt(prompt('Ingrese un tercer numero:'));

if (n1 > n2) {
    if(n1 >= n3){
        let mayor = n1;
        document.write("El numero mas grande es el numero: " + mayor);
    }
  } else if (n1 === n2 && n3 === n1) {
    document.write("Los tres numeros son iguales");
  } else if(n2 >= n3){
    let mayor = n2;
    document.write("El numero mas grande es el numero: " + mayor);
  }else{
    let mayor = n3;
    document.write("El numero mas grande es el numero: " + mayor);
  }