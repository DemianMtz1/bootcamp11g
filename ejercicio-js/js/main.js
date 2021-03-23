/*
    Script 1
*/
var ladoUno = parseInt(prompt("Ingresa valor numerico del lado 1: ")); // a
var ladoDos = parseInt(prompt("Ingresa valor numerico del lado 2: ")); // b
var ladoTres = parseInt(prompt("Ingresa valor numerico del lado 3: ")); // c
var areaTriangulo = 0;
if ((ladoUno === ladoDos && ladoDos !== ladoTres)) {
    if ((ladoTres === ladoUno && ladoUno !== ladoDos)) {
        areaTriangulo = (ladoTres * ladoDos) / 2;
        alert('Es un triangulo Isósceles');
        alert('EL area del triangulo es: ' + areaTriangulo);
    }
    alert('Es un triangulo Isósceles');
    areaTriangulo = (ladoUno * ladoTres) / 2;
    alert('EL area del triangulo es: ' + areaTriangulo);
} else if (ladoUno === ladoDos && ladoDos === ladoTres) {
    alert('Es un triangulo Equilatero');
    areaTriangulo = (ladoUno * ladoTres) / 2;
    alert('EL area del triangulo es: ' + areaTriangulo);
} else if (ladoUno !== ladoDos && ladoDos !== ladoTres) {
    alert('Es un triangulo Escaleno');
    areaTriangulo = (ladoUno * ladoTres) / 2;
    alert('EL area del triangulo es: ' + areaTriangulo);
}
/*
    Script 2
*/
var ladoUno = parseInt(prompt("Ingresa valor numerico del lado 1: ")); // a
var ladoDos = parseInt(prompt("Ingresa valor numerico del lado 2: ")); // b
var area = 0;
if(ladoUno === ladoDos) {
    alert("Es un cuadrado");
    area = ladoUno*ladoDos;
} else if( ladoUno !== ladoDos ) {
    alert("Es un rectangulo");
    area = ladoUno*ladoDos;
} else {
    alert("No es un cuadrilatero")
}