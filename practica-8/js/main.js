/*
    var phrase = "La mejor forma de predecir el futuro es creándolo"
    1- saber la cantidad de palabras
    2- saber la cantidad de "a"
    3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
        "amjrf"ugCE
    4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares
*/


var phrase = "La mejor forma de predecir el futuro es creándolo";
// 1
console.log(`La cantidad de palabras es de: ${phrase.split(" ").length}`)

// 2
console.log(`La cantidad letras a es de : ${phrase.match(/[AaÁá]/g).length}`)

// 3
var acumOdd = "";
for(var i = 0; i<phrase.length; i++){
    if(i%2 === 1) {
        acumOdd+=phrase.charAt(i);
    }
}
console.log(`Tu nueva frase es: ${acumOdd}`);

// 4
var acumEven = "";
for(var i = 0; i<phrase.length; i++){
    if(i%2 === 0) {
        acumEven+=phrase.charAt(i);
    }
}
console.log(`Tu nueva frase es: ${acumEven}`);