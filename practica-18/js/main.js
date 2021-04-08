/*https://ajaxclass-1ca34.firebaseio.com/11g/{su_nombre}/mentors.json  */


/*
nuevo mentor - CRUD APP
newObject = {
    name,
    age,
    phone
}
*/

const postMentor = newMentor => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText;
        }
    };
    xhttp.open("POST", `https://ajaxclass-1ca34.firebaseio.com/11g/demian/mentors.json`, true);
    xhttp.send(JSON.stringify(newMentor));
}

const getMentors = () => {
    let xhttp = new XMLHttpRequest();
    let mentors = null;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText;
            mentors = JSON.parse(response)
            let arrayMentors = Object.entries(mentors);
            printTable(arrayMentors);
        }
    };

    //return mentors;
    xhttp.open("GET", `https://ajaxclass-1ca34.firebaseio.com/11g/demian/mentors.json`, true);
    xhttp.send();

}



const postMentorByClick = () => {
    let buttonNode = document.querySelector('#addMentorBtn');
    let newMentor = {};
    buttonNode.addEventListener('click', event => {
        let inputs = document.querySelectorAll('.form-control')
        inputs.forEach(input => {
            newMentor = {
                ...newMentor,
                [input.id]: input.value
            }
        })
        let { name, age, phone } = newMentor;
        if (validateInfo(name) || validateInfo(age) || validateInfo(phone)) {
            alert('Estas enviando informacion incorrecta, favor de validar...');
            return;
        } else {
            postMentor(newMentor);
            let table = document.querySelector('#tableWrapper')
            console.log(table)
            document.querySelector('#table-container').removeChild(table);
            getMentors();

            alert('Mentor agregado...');
            inputs.forEach(input => {
                input.value = "";
            });
        }
    });
}

const validateInfo = data => {
    if (data === "" || data === null || data === undefined || data == NaN) {
        return true;
    } else {
        return false;
    }
}

const deleteMentorById = id => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText;
        }
    };
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/demian/mentors/${id}.json`, true);
    xhttp.send();
};

const printTable = arr => {
    let tableNode = document.createElement("table");
    tableNode.className = "table table-striped table-dark w-100";
    tableNode.id = "tableWrapper";
    let theadNode = document.createElement("thead");
    let trHead = document.createElement("tr");

    let headers = ['Mentor', 'Edad', 'Telefono', ' '];
    headers.forEach(header => {
        let thName = document.createElement("th");
        let textTitle = document.createTextNode(header);
        thName.appendChild(textTitle);
        trHead.appendChild(thName);
        theadNode.appendChild(trHead);
    })
    document.querySelector('#table-container').appendChild(tableNode);
    let tbodyNode = document.createElement("tbody");

    arr.forEach(mentor => {
        let { name, age, phone } = mentor[1];

        let trColumn = document.createElement("tr");
        trColumn.id = mentor[0];
        let nameTd = document.createElement("td");
        let nameText = document.createTextNode(name);
        let ageTd = document.createElement("td");
        let ageText = document.createTextNode(age);
        let phoneTd = document.createElement("td");
        let phoneText = document.createTextNode(phone);

        nameTd.appendChild(nameText);
        trColumn.appendChild(nameTd);

        ageTd.appendChild(ageText);
        trColumn.appendChild(ageTd);

        phoneTd.appendChild(phoneText);
        trColumn.appendChild(phoneTd);

        let btnTd = document.createElement("td");
        let btnText = document.createElement("button");
        btnText.innerText = "x";
        btnText.classList.add("btn-danger");
        btnText.classList.add("delete-class");
        btnText.id = mentor[0];
        btnText.addEventListener('click', event => {
            deleteMentorById(event.target.id);
            let table = document.querySelector('tbody')
            let trDelete = document.querySelector(`tr#${event.target.id}`);
            table.removeChild(trDelete);
        })
        btnTd.appendChild(btnText);
        trColumn.appendChild(btnTd);
        tbodyNode.appendChild(trColumn);
    })

    tableNode.appendChild(theadNode);
    tableNode.appendChild(tbodyNode);
}

postMentorByClick();
getMentors();