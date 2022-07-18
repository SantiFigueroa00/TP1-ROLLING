let n1 = parseInt(prompt('Ingrese un primer numero:'));
let n2 = parseInt(prompt('Ingrese un segundo numero:'));

if (n1 > n2) {
    let mayor = n1;
    document.write("El numero mas grande es el numero: " + mayor);
  } else if (n1 === n2) {
    document.write("Ambos numeros son iguales");
  } else {
    let mayor = n2;
    document.write("El numero mas grande es el numero: " + mayor);
  }