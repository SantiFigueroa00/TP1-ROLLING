let frase = prompt("Ingrese una frase");
let long = frase.length;
frase = frase.toLowerCase();
console.log(long)
for (let i = 0; i < long; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u"
  ){
    if((i+1)<long){
        document.write(frase.charAt(i)+'-');
    }else{
        document.write(frase.charAt(i));
    }
  }
}
