let perrosImg = [
    {
        url: 'https://s1.eestatic.com/2020/10/19/curiosidades/mascotas/mascotas-alimentacion-perros_529458667_162988306_1706x960.jpg',
        text: 'perro-1'
    },
    {
        url: 'https://www.nationalgeographic.com.es/medio/2019/09/09/bull-dog-ingles_043b09e1_800x800.jpg',
        text: 'perro-2'
    },
    {
        url: 'https://i.blogs.es/ab74c7/fotografo-de-perros_-santos-roman-piccolo-italiano/450_1000.jpg',
        text: 'perro-3'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ocqejkcDYl0opgPBLsgJY9tMGUe3_eOUjw&usqp=CAU',
        text: 'perro-4'
    },
    {
        url: 'https://as.com/diarioas/imagenes/2020/11/08/actualidad/1604843600_934489_1604843795_noticia_normal_recorte1.jpg',
        text: 'perro-5'
    },
];


const createTransformShapes = () => {
    $('form .form-check-input').click(event => {
        console.log(event.target)
        switch (event.target.id) {
            case ("cuadrado"):
                $('#figure').css({ "background-color": "yellow", "width": "300px", "height": "300px", "border-radius": "0%" });
                //$("#figure").removeAttr("");
                break;
            case ("rectangulo"):
                $('#figure').css({ "background-color": "orange", "width": "800px", "height": "300px", "border-radius": "0%" });
                break;
            case ("circulo"):
                $('#figure').css({ "background-color": "yellow", "width": "300px", "height": "300px", "border-radius": "50%" });
                break;
            default:
                break;
        }
    })
}
createTransformShapes();

const createCarousellComponent = arr => {
    let image = $('#image');
    let imageAccum = parseInt(image.data('accum'));
    image.attr('src', arr[imageAccum].url);
    $('.btn').click(ev => {
        switch (ev.target.id) {
            case 'prev':
                imageAccum === 0 ? imageAccum : imageAccum -= 1;
                image.attr('src', arr[imageAccum].url);
                break;

            case 'next':
                imageAccum === arr.length - 1 ? imageAccum : imageAccum += 1;
                image.attr('src', arr[imageAccum].url);
                break;

            default:
                console.log('Valor incorrecto, favor de validar')
                break;
        }
    })

}
createCarousellComponent(perrosImg);