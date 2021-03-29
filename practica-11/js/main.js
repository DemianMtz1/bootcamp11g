let kodersList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]
/*
    -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
*/

const newArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        newArr[i] = arr[i].join(" "); // junta los items de un array en un string
    }
    console.log(newArr)
    return newArr;
}

const orderNames = newArr(kodersList);

/*
  Ingresar un nombre
  validar si existe algún koder cuyo primer nombre coincida con el nombre escrito
*/

const validateName = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split(" ")[0]);
    }
    let name = prompt("Dime el nombre completo a buscar");
    let isIncluded = newArr.includes(name) ? console.log('Existe') : console.log('No existe')
}

//validateName(orderNames);