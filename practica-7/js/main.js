/* SCRIPT 1 
Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:
Peso inferior al normal : IMC Menos de 18.5
Normal  : IMC 18.5 – 24.9
Peso superior al normal : IMC 25.0 – 29.9
Obesidad : IMC Más de 30.0
*/

var weight = parseInt(prompt("Dame tu peso en datos numericos:"));
var height = parseInt(prompt("Dame tu estatura en datos numericos:"));

const IMC = weight / height;
if (IMC < 18.5) {
    console.log('Tu IMC es ' + IMC + 'y tu composicion corporal es un peso inferior al normal');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Tu IMC es ' + IMC + 'y tu composicion corporal normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Tu IMC es ' + IMC + 'y tu composicion corporal es de un peso superior al normal');
} else if (IMC > 30) {
    console.log('Tu IMC es ' + IMC + 'y tu composicion corporal es de obesidad');
} else {
    console.log('Probablemente diste un dato equivocado...')
}

/**
    SCRIPT 2
    Usando como referencia los siguientes datos de estaturas promedio:
                General Varón   Mujer

    Brasil      167.3   173.6   160.9   cm's
    México      169.9   170.0   160.8   cm's
    Canadá      171.0   178.1   163.9   cm's
    Reino Unido 171.0   177.5   164.4   cm's
    Australia   172.6   179.2   165.9   cm's
    crear un script que me permita conocer si mi estatura es superior, inferior o igual al promedio dependiendo de mi país y género. Si mi país no se encuentra en la lista, indicar que no se cuenta con el dato de estatura para ese país.
 */
var heightPerson = parseInt(prompt("Dame tu estatura en datos numericos basada en cm:"));
var gender = prompt("Si eres Varon escribe M y si eres mujer escribe F");
switch (gender) {
    case 'M':
        if (height <= 170) {
            console.log('Tienes la estatura promedio de un Varon en Mexico');
        } else if (height <= 173.6 && height > 170) {
            console.log('Tienes la estatura promedio de un Varon en Brasil');
        } else if (height <= 177.5 && height > 173.6) {
            console.log('Tienes la estatura promedio de un Varon en Reino Unido');
        } else if (height <= 178.1 && height > 177.5) {
            console.log('Tienes la estatura promedio de un Varon en Canada');
        } else if (height <= 179.2 && height > 178.1) {
            console.log('Tienes la estatura promedio de un Varon en Australia');
        } else {
            console.log('No se encuentra con la estatura promedio de un Varon en tu pais...')
        }
        break;
    case 'F':
        if (height <= 160.8) {
            console.log('Tienes la estatura promedio de una Mujer en Mexico');
        } else if (height <= 160.9 && height > 160.8) {
            console.log('Tienes la estatura promedio de una Mujer en Brasil');
        } else if (height <= 163.3 && height > 160.9) {
            console.log('Tienes la estatura promedio de una Mujer en Canada');
        } else if (height <= 164.4 && height > 163.3) {
            console.log('Tienes la estatura promedio de una Mujer en Reino unido');
        } else if (height <= 165.9 && height > 164.4) {
            console.log('Tienes la estatura promedio de una Mujer en Australia');
        } else {
            console.log('No se encuentra con la estatura promedio de una Mujer en tu pais...')
        }
        break;

    default:
        if (height <= 167.3) {
            console.log('Tienes la estatura promedio en Brasil');
        } else if (height <= 169.9 && height > 167.3) {
            console.log('Tienes la estatura promedio en Mexico');
        } else if (height <= 171 && height > 169.9) {
            console.log('Tienes la estatura promedio en Canada y Reino Unido');
        } else if (height <= 172.6 && height > 171) {
            console.log('Tienes la estatura promedio en Australia');
        } else {
            console.log('No se encuentra con la estatura promedio en tu pais...')
        }
        break;
}

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
var weightCube = parseInt(prompt("Dame la dimension de tu cubo:"));
var material = prompt("Dame el material que quieres consultar:");
var totalWeight = 0;
switch (material) {
    case 'Acero':
        totalWeight = weightCube * 7850;
        console.log('El peso de tu cubo es: '+totalWeight);
        break;
    case 'Cobre':
        totalWeight = weightCube * 8940;
        console.log('El peso de tu cubo es: '+totalWeight);
        break;
    case 'Oro':
        totalWeight = weightCube * 19300;
        console.log('El peso de tu cubo es: '+totalWeight);
        break;
    case 'Plata':
        totalWeight = weightCube * 10490;
        console.log('El peso de tu cubo es: '+totalWeight);
        break;
    case 'Diamante':
        totalWeight = weightCube * 3515;
        console.log('El peso de tu cubo es: '+totalWeight);
        break;
    default:
        console.log('No se encuentra con los datos para calcular la densidad de dicho material');
        break;
}