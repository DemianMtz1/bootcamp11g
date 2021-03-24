
/*
    Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados:
    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 
*/

var phrase = "La mejor forma de predecir el futuro es creándolo";

// 1
console.log('---------SCRIPT-1----------');
console.log(`La nueva frase usando snake_case es:\n${phrase.replace(/ /g, "_")}`);

// 2
console.log('---------SCRIPT-2----------');
console.log(`La nueva frase usando kebab-case es:\n${phrase.replace(/ /g, "-")}`);

// 3
console.log('---------SCRIPT-3----------');
var newPhraseUpper = "";
for (var i = 0; i < phrase.length; i++) {
    if (phrase.charAt(i).match(/[a,á,e,é,i,í,o,ó,u,ú]/gi)) {
        newPhraseUpper += phrase.charAt(i).replace(phrase.charAt(i), phrase.charAt(i).toUpperCase());
    } else {
        newPhraseUpper += phrase.charAt(i);
    }
}
console.log(`La nueva frase transformando todas las vocales en mayusculas es:\n ${newPhraseUpper}`)
// 4
console.log('---------SCRIPT-4----------');
for (var i = 0; i < 10; i++) {
    console.log(`Caracter: ${phrase.charAt(i)} - Posicion: ${i + 1}`);
}
// 5
console.log('---------SCRIPT-5-FORMA-1----------');
var newPhrase = phrase.split("").reverse();
for (var i = 0; i < 10; i++) {
    console.log(`Caracter: ${newPhrase[i]} - Posicion: ${10 - i}`);
}

console.log('---------SCRIPT-5-FORMA-2----------');
var newPhrase2 = phrase.split("");
for (var i = (newPhrase2.length - 1); i >= newPhrase2.length - 10; i--) {
    console.log(`Caracter: ${newPhrase2[i]} - Posicion: ${newPhrase2.length - i} de atras hacia delante`);
}