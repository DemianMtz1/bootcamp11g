/* 
Script 1
índice de masa coporal IMC= peso/altura
 */
var peso = peso;
var altura = altura;
var IMC = IMC;
var altura2 = (altura * 100);
alert("Este script calcula el IMC");
var peso = prompt("Ingresa tu peso");
var altura = prompt("Ingresa tu altura");
peso = parseInt(peso);
altura = parseFloat(altura);
IMC = (peso / (altura * altura));
alert("Tu IMC es: " + IMC);
if (IMC <= 18.5) {
    alert("Peso inferior al normal");
}
if (IMC >= 18.5 && IMC <= 24.9) {
    alert("Tu peso es normal");
}
if (IMC >= 25.0 && IMC <= 29.9) {
    alert("Tu peso es superior al normal");
}
if (IMC >= 30.0) {
    alert("¡Muévete!");
} else {
    alert("Valor no definido");
}

/*
Script 2

 */
var pais = prompt("Ingresa tu Pais");
var altura = prompt("Ingresa tu altura");
var genero = prompt("Ingresa tu genero");
alert("Tu Pais: " + pais);
alert("Tu altura: " + altura);
alert("Tu genero: " + genero);
switch (pais) {
    case "Mexico":
        if (genero == "masculino" && altura == 169.9) {
            alert("Tu estatura es promedio general");//promedio en general
        } else if (genero == "masculino" && altura == 170.0) {
            alert("Tu estatura es promedio al género masculino");//promedio frente a hombres
        } else if (genero == "masculino" && altura >= 170.0) {
            alert("Tu estatura es mayor al promedio del género masculino");//mayor frente al promedio
        } else if (genero == "masculino" && altura <= 170.0) {
            alert("Tu estatura es menor al promedio del género masculino");//menor frente al promedio
        }
        else if (genero == "femenino" && altura == 169.9) {
            alert("Tu estatura es promedio general");
        }
        else if (genero == "femenino" && altura == 160.8) {
            alert("Tu estatura es promedio al género Femenino");
        } else if (genero == "femenino" && altura >= 160.8) {
            alert("Tu estatura es mayor al promedio del género Femenino");
        } else if (genero == "femenino" && altura <= 160.8) {
            alert("Tu estatura es menor al promedio del género Femenino");
        } else {
            alert("ingreso de dato errado");
        }break;
    case "Australia":
        if (genero == "masculino" && altura == 172.6) {
            alert("Tu estatura es promedio general");//promedio en general
        } else if (genero == "masculino" && altura == 179.2) {
            alert("Tu estatura es promedio al género masculino");//promedio frente a hombres
        } else if (genero == "masculino" && altura >= 179.2) {
            alert("Tu estatura es mayor al promedio del género masculino");//mayor frente al promedio
        } else if (genero == "masculino" && altura <= 179.2) {
            alert("Tu estatura es menor al promedio del género masculino");//menor frente al promedio
        }
        else if (genero == "femenino" && altura == 172.6) {
            alert("Tu estatura es promedio general");
        }
        else if (genero == "femenino" && altura == 165.9) {
            alert("Tu estatura es promedio al género Femenino");
        } else if (genero == "femenino" && altura >= 165.9) {
            alert("Tu estatura es mayor al promedio del género Femenino");
        } else if (genero == "femenino" && altura <= 165.9) {
            alert("Tu estatura es menor al promedio del género Femenino");
        } else {
            alert("ingreso de dato errado");
        }
        break;
    case "Canada":
        if (genero == "masculino" && altura == 171.0) {
            alert("Tu estatura es promedio general");//promedio en general
        } else if (genero == "masculino" && altura == 178.1) {
            alert("Tu estatura es promedio al género masculino");//promedio frente a hombres
        } else if (genero == "masculino" && altura >= 178.1) {
            alert("Tu estatura es mayor al promedio del género masculino");//mayor frente al promedio
        } else if (genero == "masculino" && altura <= 178.1) {
            alert("Tu estatura es menor al promedio del género masculino");//menor frente al promedio
        }
        else if (genero == "femenino" && altura == 171.0) {
            alert("Tu estatura es promedio general");
        }
        else if (genero == "femenino" && altura == 163.9) {
            alert("Tu estatura es promedio al género Femenino");
        } else if (genero == "femenino" && altura >= 163.9) {
            alert("Tu estatura es mayor al promedio del género Femenino");
        } else if (genero == "femenino" && altura <= 163.9) {
            alert("Tu estatura es menor al promedio del género Femenino");
        } else {
            alert("ingreso de dato errado");
        }
        break;
    case "Brasil":
        if (genero == "masculino" && altura == 167.3) {
            alert("Tu estatura es promedio general");//promedio en general
        } else if (genero == "masculino" && altura == 173.6) {
            alert("Tu estatura es promedio al género masculino");//promedio frente a hombres
        } else if (genero == "masculino" && altura >= 173.6) {
            alert("Tu estatura es mayor al promedio del género masculino");//mayor frente al promedio
        } else if (genero == "masculino" && altura <= 173.6) {
            alert("Tu estatura es menor al promedio del género masculino");//menor frente al promedio
        }
        else if (genero == "femenino" && altura == 167.3) {
            alert("Tu estatura es promedio general");
        }
        else if (genero == "femenino" && altura == 160.9) {
            alert("Tu estatura es promedio al género Femenino");
        } else if (genero == "femenino" && altura >= 160.9) {
            alert("Tu estatura es mayor al promedio del género Femenino");
        } else if (genero == "femenino" && altura <= 160.9) {
            alert("Tu estatura es menor al promedio del género Femenino");
        } else {
            alert("ingreso de dato errado");
        }
        break;
    case "Reino Unido":
        if (genero == "masculino" && altura == 171.0) {
            alert("Tu estatura es promedio general");//promedio en general
        } else if (genero == "masculino" && altura == 177.5) {
            alert("Tu estatura es promedio al género masculino");//promedio frente a hombres
        } else if (genero == "masculino" && altura >= 177.5) {
            alert("Tu estatura es mayor al promedio del género masculino");//mayor frente al promedio
        } else if (genero == "masculino" && altura <= 177.5) {
            alert("Tu estatura es menor al promedio del género masculino");//menor frente al promedio
        }
        else if (genero == "femenino" && altura == 171.0) {
            alert("Tu estatura es promedio general");
        }
        else if (genero == "femenino" && altura == 164.4) {
            alert("Tu estatura es promedio al género Femenino");
        } else if (genero == "femenino" && altura >= 164.4) {
            alert("Tu estatura es mayor al promedio del género Femenino");
        } else if (genero == "femenino" && altura <= 164.4) {
            alert("Tu estatura es menor al promedio del género Femenino");
        } else {
            alert("ingreso de dato errado");
        }
        break;
    default:
        if (pais != "Mexico" || pais != "Austraia" || pais != "Canada" || pais != "Brasil" || pais != "Reino Unido") {
            alert("No se cuenta con el dato de estatura para ese país")
        }
        else {
            alert("ingreso de dato errado");
        };
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