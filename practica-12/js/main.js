let mentorsArray = [
    {
        name: "Israel Salinas Martinez",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 8
            },
            {
                signature: "ReactJS",
                score: 8
            }
        ]
    },
    {
        name: "David Cermeño Moranchel",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 7
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    },
    {
        name: "Charles Silva",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 9
            }
        ]
    },
    {
        name: "Michael Villalba Sotelo",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    }
];

/*
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

const getAverageScoreBySignature = (arr, signature) => {
    let newArr = [], acumScore = 0;
    arr.map(mentor => newArr.push(mentor.scores.filter(score => score.signature === signature)));

    newArr.map( mentorScore => mentorScore.map(score=> acumScore += score.score ))
    return acumScore;
}

const getAverageByMentor = (arr, mentorName) => {
    let newArr = [],  average = 0;
    arr.map(mentor => {
        if(mentor.name === mentorName){
            mentor.scores.map(score => average += score.score)
            average= average / mentor.scores.length;
        }
    })
    return average;
}

const arrayStrings = (arr) => {
    let newArr = [];
    arr.map(mentor => {
        newArr.push(`Mi nombre es ${mentor.name} y mi promedio es de ${getAverageByMentor(arr,mentor.name)}`)
    })
    return newArr;
}

const listMentors = (arr) => {
    let newArr = [];
    arr.map(mentor => {
        newArr.push([mentor.name, getAverageByMentor(arr,mentor.name)]);
        
    })
    let filterArr = newArr.filter(averageMentors=> averageMentors[1]>9.1);
    return filterArr;
}