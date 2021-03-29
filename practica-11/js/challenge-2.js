/*
    -quiero conocer la cantidad de productos en el array
    -quiero conocer el costo total de todos los productos del array
    -quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    -quiero un nuevo array para cada categoría
    -quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/
var productsList = [
    {
        name: "producto 1",
        price: 12.45,
        category: "Miscellaneous"
    },
    {
        name: "producto 2",
        price: 25.13,
        category: "Vegetables"
    },
    {
        name: "producto 3",
        price: 45.00,
        category: "Cloths"
    },
    {
        name: "producto 4",
        price: 12500.00,
        category: "Computers"
    },
    {
        name: "producto 5",
        price: 15500.00,
        category: "Computers"
    },
    {
        name: "producto 6",
        price: 8729.00,
        category: "Computers"
    }, {
        name: "producto 7",
        price: 150.00,
        category: "Cloths"
    }, {
        name: "producto 8",
        price: 100.00,
        category: "Miscellaneous"
    }, {
        name: "producto 9",
        price: 50.00,
        category: "Vegetables"
    }, {
        name: "producto 10",
        price: 200.00,
        category: "Cloths"
    }
];

///
const getLengthProducts = array => array.length

///
const totalProducts = array => {
    let total = 0;
    array.map(element => total += element)
    return total

}

///
const productsByCategory = (arr, category) => {
    let newArr = [];
    newArr = arr.filter(element => element.category == category)
    return newArr;
}

///
const categoryArr = arr => {
    let newArr = [];
    arr.map(element => {
        if (newArr.includes(element.category) == false) {
            newArr.push(element.category)
        }
    })
    return newArr;
}

////
const descriptionArr = arr => {
    let newArr = [];
    arr.forEach(element => newArr.push(`El ${element.name} tiene un costo de ${element.price}`));
    return newArr;
}