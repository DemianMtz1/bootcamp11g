/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array
    -imprimir cada uno de los koders

    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/

function addKoders() {
    let totalKoders = parseInt(prompt("Cuantos Koders se registraran?"));
    let name = "", lastName = "", i = 0, answer = "", arrKoders = [];
    for (let i = 0; i < totalKoders; i++) {
        name = prompt(`Escribe tu nombre koder ${i}: `);
        lastName = prompt(`Escribe tu apellido koder ${i}: `);
        arrKoders.push(name + " " + lastName);
    }
    return arrKoders;
}

function continueAdding() {
    let answer = "", arrKoders = [], finalArr = [];

    do {
        arrKoders = addKoders();
        arrKoders.map(element => finalArr.push(element));
        answer = prompt("Deseas continuar agregando Koders? Y/n")
    } while (answer == 'Y' || answer == 'y');
    console.log(`Koders agregados! ${finalArr}`);
    return finalArr;
}

function kodersForm() {
    let totalKoders = continueAdding();
    let removeKodersQs = prompt(`Tienes ${totalKoders.length} Koders registrados deseas remover alguno? Y/n`);
    let randomNumber = 0, arrFilter = [];
    if (removeKodersQs == 'Y' || removeKodersQs == 'y') {
        randomNumber = Math.floor(Math.random() * totalKoders.length)
        arrFilter = totalKoders.filter((koder,idx) => idx !== randomNumber);
        console.log(`Listo se elimino el koder ${randomNumber}`);
    }
    console.log(arrFilter);
    return arrFilter;

}

//kodersForm();