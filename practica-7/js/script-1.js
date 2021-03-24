/* 
Script 1
índice de masa coporal IMC= peso/altura
 */
alert("Este script calcula el IMC");
var peso = prompt("Ingresa tu peso");
var altura = prompt("Ingresa tu altura");
peso = parseInt(peso);
altura = parseFloat(altura);
IMC = (peso / (altura * altura));
alert("Tu IMC es: " + IMC);
if (IMC <= 18.5) {
    alert("Peso inferior al normal");
} else if (IMC >= 18.5 && IMC <= 24.9) {
    alert("Tu peso es normal");
} else if (IMC >= 25.0 && IMC <= 29.9) {
    alert("Tu peso es superior al normal");
} else if (IMC >= 30.0) {
    alert("¡Muévete!");
} else {
    alert("Valor no definido");
}


