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
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]


const getLengthProducts = array => array.length 

const totalProducts = array =>{
 
  let total = 0
  for(let i= 0; i<array.length; i++) {
    
    total+= array[i].price
  }
  return total
  
}
///
const productsByCategory = (arr, category) =>{
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].category == category){
            newArr.push([arr[i].name, arr[i].price])
        }
    }
    return newArr;
}
//////////
const categoryArr = arrayCategoria =>{
 let newArr = [];
  for (let i = 0; i < arrayCategoria.length; i++) {
    if (newArr.includes(arrayCategoria[i].category)==false) {
      newArr.push (arrayCategoria[i].category)
      
    }
  }
  return newArr;
}
////
const descriptionArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
       newArr.push(`El ${ arr[i].name } tiene un costo de ${arr[i].price}`);
    }
    return newArr;
}
