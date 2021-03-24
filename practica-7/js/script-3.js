/*
Tomando como referencia los siguientes datos de densidades:
Sustancia       Densidad (kg/m3)
Acero           7850
Cobre           8940
Oro             19300
Plata           10490
Diamante        3515
crear un script que me permita conocer el peso de un cubo de cualquier material (pedir al usuario la dimensión del lado del cubo y el material a consultar). Si el material no se encuentra en la lista, informar que no se cuentan con datos sobre la densidad de dicho material.
*/
var weight = parseInt(prompt("Dame la dimension de tu cubo:"));
var material = prompt("Dame el material que quieres consultar:");
var totalWeight = 0;
switch (material) {
    case 'Acero':
        totalWeight = weight * 7850;
        console.log('El peso de tu cubo es: ' + totalWeight);
        break;
    case 'Cobre':
        totalWeight = weight * 8940;
        console.log('El peso de tu cubo es: ' + totalWeight);
        break;
    case 'Oro':
        totalWeight = weight * 19300;
        console.log('El peso de tu cubo es: ' + totalWeight);
        break;
    case 'Plata':
        totalWeight = weight * 10490;
        console.log('El peso de tu cubo es: ' + totalWeight);
        break;
    case 'Diamante':
        totalWeight = weight * 3515;
        console.log('El peso de tu cubo es: ' + totalWeight);
        break;
    default:
        console.log('No se encuentra con los datos para calcular la densidad de dicho material');
        break;
}