/*https://ajaxclass-1ca34.firebaseio.com/11g/demian/mentors.json

let cardHtml = 
            `<div class="card">
                <div class="card-body">
                    <div class="card-title">Un título</div>
                    <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor est, maiores a illum quod laboriosam fugit ut esse aliquid quos?</div>
                </div>
            </div>`;

*/
const validateInfo = data => {
    if (data === "" || data === null || data === undefined || data == NaN) {
        return true;
    } else {
        return false;
    }
}


const getData = () => {
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/demian/mentors.json",
        success: response => {
            Object.entries(response).forEach(currentMentor => {
                let { age, name, phone } = currentMentor[1];
                let cardMentor =
                    `<div id=${currentMentor[0]} class="card my-2">
                        <div class="card-body">
                            <div class="card-title"><b>Mentor</b>: ${name}</div>
                            <div class="dropdown-divider"></div>
                            <div class="card-text"><b>Edad</b>:${age}</div>
                            <div class="card-text"><b>Telefono</b>:${phone}</div>
                        </div>
                        <div class="d-flex w-100 justify-content-between btn-group-mentors">
                            <button type="button" class="btn-modify btn btn-outline-secondary font-weight-bold py-2 mt-2 " id=${currentMentor[0]}>Editar mentor</button>
                            <button type="button" class="btn-delete btn btn-danger text-white font-weight-bold py-2 mt-2 " id=${currentMentor[0]}>Eliminar mentor</button>
                        </div>
                    </div>`;
                $('#card-wrapper').append(cardMentor)
            });
        },
        error: error => {
            console.log(error)
        }
    })
}
getData();

const postMentors = newMentor => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/demian/mentors.json",
        data: JSON.stringify(newMentor),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const deleteMentors = key => {
    $.ajax({
        method: "DELETE",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/demian/mentors/${key}.json`,
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const putMentors = (key, data) => {
    $.ajax({
        method: "PUT",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/demian/mentors/${key}.json`,
        data: JSON.stringify(data),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const newMentor = () => {
    let newMentor = {}
    $('#btn-add').click(ev => {
        let inputTextGroup = $('input[type="text"]');
        $.each(inputTextGroup, (idx, mentorIn) => {
            newMentor = {
                ...newMentor,
                [mentorIn.id]: mentorIn.value
            };
        });
        if (validateInfo(newMentor.name) || validateInfo(newMentor.age) || validateInfo(newMentor.phone)) {
            alert('Favor de rellenar los campos vacios');
        } else {
            //console.log(newMentor)
            postMentors(newMentor);
            alert('Mentor agregado...')
            $.each(inputTextGroup, (idx, mentorIn) => {
                mentorIn.value = ""
            });
        }
    });
}

newMentor();

const removeMentors = () => {
    let btns = $(document).on('click', '.btn-delete', ev => {
        let key = ev.target.id;
        deleteMentors(key);
        $(`div#${key}`).remove();

    })
}
removeMentors();

const modifyMentor = () => {
    let mentor = {};
    let key = "";
    let inputMentorsGroup = $('form.mentors input[type="text"]')
    console.log(inputMentorsGroup)
    $(document).on('click', '.btn-modify', ev => {
        key = ev.target.id;
        console.log(key)
        $('#myModal').modal('show');
        $('#btn-mod').click(ev => {
            $.each(inputMentorsGroup, (idx, mentorIn) => {
                mentor = { ...mentor, [mentorIn.id]: mentorIn.value };
            });
            let newMentor = {
                name:mentor.nameMod,
                age:mentor.ageMod,
                phone: mentor.phoneMod,
            }
            if (validateInfo(newMentor.name) || validateInfo(newMentor.age) || validateInfo(newMentor.phone)) {
                alert('Favor de rellenar los campos vacios');
            } else {
                putMentors(key, newMentor);
                $('#myModal').modal('hide');
                $.each(inputMentorsGroup, (idx, mentorIn) => {
                    mentorIn.value = ""
                });
            }
        });
    });


    console.log(mentor)
}

modifyMentor();