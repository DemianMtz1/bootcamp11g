/* Script 2 */

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
        } break;
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