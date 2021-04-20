/*
idPet
namePet
Description
urlImagePet
ownerId


          <div class="card" style="width: 18rem; height: 400px">
                <img
                class="card-img-top"
                src="https://perro.shop/wp-content/uploads/rottweiler_1.jpg"
                alt="Card image cap"
                style="height: 40%"
                />
                <div class="card-body h-50">
                <h5 class="card-title">Perro locote</h5>
                <p class="card-text">Un buen perro que le gusta destruir cosas</p>
                <p class="card-text">
                    El dueño es :
                    <span class="font-weight-bold">Juanito el loco</span>
                </p>
                <button
                    type="button"
                    href="#"
                    class="btn btn-primary adopt-pet-btn"
                >
                    Adoptar
                </button>
                </div>
          </div>


            <p class="card-text">
                El dueño es :
                <span class="font-weight-bold">nadie quiere a este perrito uwu</span>
            </p>
            <button
                type="button"
                href="#"
                class="btn btn-primary adopt-pet-btn"
            >
                Adoptar
            </button>


*/


/* GENERAL METHODS */
const validateInfoPet = (data) => {
    if (data === "" || data === null || data === undefined || data == NaN) {
        return true;
    } else {
        return false;
    }
};

/* Metodos HTTP */
const getPet = () => {
    let usersCollection;

    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/demian/pets.json",
        success: (response) => {
            petsCollection = response;
            //console.log(petsCollection)
        },
        error: (error) => {
            console.log(error);
        },
        async: false,
    });
    return petsCollection;
};

const postPet = newOwner => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/demian/pets.json",
        data: JSON.stringify(newOwner),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};
const deletePet = key => {
    $.ajax({
        method: "DELETE",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/demian/pets/${key}.json`,
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};

const putPet = (key, data) => {
    $.ajax({
        method: "PUT",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/demian/pets/${key}.json`,
        data: JSON.stringify(data),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};

// owners 
const putOwner = (key, data) => {
    $.ajax({
        method: "PUT",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/demian/owners/${key}.json`,
        data: JSON.stringify(data),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};


const savePet = () => {
    let groupInputs = $('.pet-info input[type="text"]')
    //console.log(groupInputs)
    let newPet = {}
    let petId = Date.now()
    $('#save-pet').click(() => {
        $.each(groupInputs, (idx, currentInput) => {
            // console.log(currentInput.value)
            newPet = { ...newPet, [currentInput.name]: currentInput.value }
        })
        if (validateInfoPet(newPet.namePet) || validateInfoPet(newPet.race) || validateInfoPet(newPet.urlImagePet)) {
            alert('Hay campos vacios, favor de validar.')
        } else {

            newPet = { ...newPet, petId, pets: [] }
            console.log(newPet)
            postPet(newPet);
            $('#pets-wrapper').children().remove();
            printPets(getPet());
            $.each(groupInputs, (idx, currentInput) => {
                // console.log(currentInput.value)
                currentInput.value = ""
            })
        }
    })
}
savePet();

const filteredPetsById = (petId, pets) => {
    let filteredPet;
    for (key in pets) {
        if (pets[key].petId == petId) {
            filteredPet = pets[key];
        }
    }
    //console.log(filteredPet)
    return filteredPet
}


const getOwnerById = (ownerId, owners) => {
    let ownerName ;
    for (key in owners) {
        if (owners[key].ownerId == ownerId) {
            ownerName = owners[key].firstName+' '+owners[key].lastName;
        }
    }
    return ownerName
}
const adoptPetClick = ev => {
    let petId = ev.target.dataset.petId;
    //console.log(petId)
    let allPets = getPet()
    let selectedPet = filteredPetsById(petId, allPets)
    //console.log(selectedPet)
    let ownerId = $('#select-user option:selected').val();
    let petKey = '';
    selectedPet =  {
        ...selectedPet,
        ownerId
    }
    
    for ( key in allPets) {
        if(allPets[key].petId == petId){
            petKey = key
        }
    }
    console.log(petKey)
    putPet(petKey, selectedPet);
    $('#pets-wrapper').children().remove()
    printPets(getPet())
    
}

const printPets = pets => {
    $('#pets-wrapper').children().remove()
    /*  PRINT COMPLETE CARD*/
    for (key in pets) {
        let petCard =
            `
        <div class="card mr-3 my-2" style="width: 18rem; height: 370px">
            <img
            class="card-img-top"
            src=${pets[key].urlImagePet}
            alt="Card image cap"
            style="height: 50%"
            />
            <div class="card-body h-50">
            <p class="card-text font-weight-bold">Nombre de la mascota: <span class="font-weight-light text-muted">${pets[key].namePet}<span></p>
            <p class="card-text text-uppercase font-weight-bold">Raza: <span class="font-weight-light text-muted">${pets[key].race}<span></p>
            <div class="adopt-wrapper" data-pet-id=${pets[key].petId}>
                ${
                    pets[key].ownerId == undefined ?
                    `
                    <button
                    id=${pets[key].petId}
                    data-pet-id=${pets[key].petId}
                    type="button"
                    href="#"
                    class="btn btn-primary adopt-pet-btn"
                    >
                        Adoptar
                    </button>
                    `:
                    `
                    <p class="card-text text-uppercase font-weight-bold">Dueño: <span class="font-weight-light text-muted">${getOwnerById(pets[key].ownerId, getOwner())}<span></p>
                    `
                }
            </div>
            </div>
        </div>
        `;
        $('#pets-wrapper').prepend(petCard);
    }
    $('.adopt-pet-btn').click(adoptPetClick)
}

printPets(getPet());


const insertPetsByOwner = () => {

}

$('#filter-pets').change(ev => {
    console.log(ev.target.value)
    if(ev.target.value === 'all'){
        $('#pets-wrapper').children().remove();
        printPets(getPet());
    }else if(ev.target.value === 'owned'){
        let allPets = getPet();
        let ownedPets;
        for ( key in allPets) {
            if(allPets[key].ownerId){
                ownedPets = {
                    ...ownedPets,
                    [key]: allPets[key]
                }
            }
        }
        $('#pets-wrapper').children().remove();
        printPets(ownedPets)
    }else if(ev.target.value === 'available'){
        let allPets = getPet();
        let availablePets;
        for ( key in allPets) {
            if(allPets[key].ownerId == undefined || allPets[key].ownerId == null ){
                availablePets = {
                    ...availablePets,
                    [key]: allPets[key]
                }
            }
        }
        $('#pets-wrapper').children().remove();
        printPets(availablePets);
    }
})

