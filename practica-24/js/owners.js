/*
ownerId
firstName
lastName
urlImageOwner
pets = [idPet]
*/

/* GENERAL METHODS */
const validateInfo = (data) => {
    if (data === "" || data === null || data === undefined || data == NaN) {
        return true;
    } else {
        return false;
    }
};

/* Metodos HTTP */
const getOwner = () => {
    let usersCollection;

    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/demian/owners.json",
        success: (response) => {
            ownersCollection = response;
            //console.log(ownersCollection)
        },
        error: (error) => {
            console.log(error);
        },
        async: false,
    });
    return ownersCollection;
};

const postOwner = newOwner => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/demian/owners.json",
        data: JSON.stringify(newOwner),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};
const deleteOwner =  key => {
    $.ajax({
        method: "DELETE",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/demian/owners/${key}.json`,
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};


const saveOwner = () => {
    let groupInputs = $('.owner-info input[type="text"]')
    //console.log(groupInputs)
    let newOwner = {}
    let ownerId = Date.now()
    let groupSelect = $('#select-user');
    $('#save-owner').click(() => {
        $.each(groupInputs, (idx, currentInput) => {
            // console.log(currentInput.value)
            newOwner = { ...newOwner, [currentInput.name]: currentInput.value }
        })
        if (validateInfo(newOwner.firstName) || validateInfo(newOwner.lastName) || validateInfo(newOwner.urlImageOwner)) {
            alert('Hay campos vacios, favor de validar.')
        } else {

            newOwner = { ...newOwner, ownerId, pets: [] }
            postOwner(newOwner);
            selectUser(getOwner())
            $.each(groupInputs, (idx, currentInput) => {
                // console.log(currentInput.value)
                currentInput.value = ""
            })
        }
    })
}
saveOwner()

const selectUser = (dataOwners) => {
    //console.log($('#select-user'))
    let groupSelect = $('#select-user');
    groupSelect.children().remove();

    let optionSelect = '', idx = 0;
    for (key in dataOwners) {
        if (idx == 0) {
            optionSelect = `<option value=${dataOwners[key].ownerId} selected >${dataOwners[key].firstName} ${dataOwners[key].lastName}</option>`;
            $('#img-avatar-owner').attr('src', dataOwners[key].urlImageOwner);
        } else {
            optionSelect = `<option value=${dataOwners[key].ownerId}>${dataOwners[key].firstName} ${dataOwners[key].lastName}</option>`;
        }
        idx++;
        groupSelect.append(optionSelect);
    }
}

selectUser(getOwner());


const filteredOwnerById = (owners, id) => {
    let filteredOwner;
    for (key in owners) {
        if (owners[key].ownerId == id) {
            filteredOwner = owners[key];
        }
    }
    return filteredOwner
}


$('#select-user').change(ev => {
    let selectedOwnerData = filteredOwnerById(getOwner(), ev.target.value);
    $('#img-avatar-owner').attr('src', selectedOwnerData.urlImageOwner);
})