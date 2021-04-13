/* Toggle ajax y jquery */


const hideElementAjax = () => {
    let element = document.getElementById('hide-btn');
    let text = document.getElementById('text');
    element.addEventListener('click', ()=>{

        console.log(text.classList.contains('d-none'))
        text.classList.contains('d-none') ? text.classList.remove('d-none') : text.classList.add('d-none')
    })
}

//hideElementAjax()

const hideElementJquery = () => {
    $('#hide-btn').click(()=>{
        $('#text').toggle();
    })
}

hideElementJquery()