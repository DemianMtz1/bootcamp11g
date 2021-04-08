/* let arrayName = [ "jaime", "Beto", "Mariana"]
const printList = () => {
  let list = document.createElement("ul")
  arrayName.forEach(name => {
    let itemList = document.createElement("li")
    let itemText = document.createTextNode (name)
    itemList.appendChild(itemText)
    list.appendChild(itemList)
  })
    document.body.appendChild(list)
} */



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
]

const PrintTables = (array) => {
    var mytable = document.createElement("table")
    mytable.className = "table table-striped table-dark"
    var myThead = document.createElement("thead")
    var mytr = document.createElement("tr")

    let columH = ["Mentor", "HTML", "CSS", "JS", "ReactJS", "Promedio "]
    columH.forEach((header) => {
        var thName = document.createElement("th")
        var textTitle = document.createTextNode(header)
        thName.appendChild(textTitle)
        mytr.appendChild(thName)
        myThead.appendChild(mytr)
    })
    mytable.appendChild(myThead)
    var tBody = document.createElement("tbody")
    let generalAverage = 0
    array.forEach((mentor) => {

        let trcolum = document.createElement("tr")
        let tdMentor = document.createElement("td")
        let texMentor = document.createTextNode(mentor.name)
        tdMentor.appendChild(texMentor)
        trcolum.appendChild(tdMentor)
        let tdAverage = document.createElement("td")
        let averageacum = 0

        mentor.scores.forEach((scoreMentor) => {

            let tdHtml = document.createElement("td")
            let texHtml = document.createTextNode(scoreMentor.score)
            averageacum += scoreMentor.score
            scoreMentor.score < 9 ? tdHtml.classList.add("bg-danger"): tdHtml.classList.add("bg-success")
            tdHtml.appendChild(texHtml)
            trcolum.appendChild(tdHtml)

        })
        let scoreAverage = averageacum / mentor.scores.length
        let averagetxt = document.createTextNode(scoreAverage)
        generalAverage += scoreAverage
        tdAverage.appendChild(averagetxt)
        trcolum.appendChild(tdAverage)
        tBody.appendChild(trcolum)
    })

    let avegareMentor = generalAverage / array.length
    
    mytable.appendChild(tBody)
    document.body.appendChild(mytable)
    document.write("<p class= 'bg-dark text-white mt-0 text-center'> El promedio general de los mentores de Kodemia es: <b class= bg-danger>" + avegareMentor + '</b></p>')



}

PrintTables(mentorsArray)

const getLowerScore = () => {
    let scores = document.querySelectorAll('td.bg-danger');
    console.log(scores.length);
    return scores.length;
}

const printLowerScores = () => {
    let pTag = document.createElement('p')
    let pText = document.createTextNode(getLowerScore())
    pTag.appendChild(pText)
    pTag.classList.add('text-center')
    document.body.appendChild(pTag)
}

document.getElementById('printLowerScore').addEventListener('click', printLowerScores)

//
// add new data
let btnSubmitNode = document.querySelector('#submitBtn');
    
    
let newObject = {};
btnSubmitNode.addEventListener('click', event => {
    let inputsForm = document.querySelectorAll('.form-control');
    
    inputsForm.forEach(currentInput => {
        if (currentInput.id !== 'mentorInput') {
            newObject = {
                ...newObject,
                [currentInput.id]: parseInt(currentInput.value)
            }
        } else {
            newObject = {
                ...newObject,
                [currentInput.id]: currentInput.value
            }
        }
    })
    console.log(newObject)

    array.push(newObject);
    
    let newTr = document.createElement('tr');
    let newMentorTd = document.createElement('td');
    let newMentorTdText = document.createTextNode(newObject.mentorInput);
    newMentorTd.appendChild(newMentorTdText);
    
    let newHtmlTd = document.createElement('td');
    let newHtmlTdText = document.createTextNode(newObject.htmlInput);
    newHtmlTd.appendChild(newHtmlTdText);
    
    let newCssTd = document.createElement('td');
    let newCssTdText = document.createTextNode(newObject.cssInput);
    newCssTd.appendChild(newCssTdText);
    
    let newJsTd = document.createElement('td');
    let newJsTdText = document.createTextNode(newObject.jsInput);
    newJsTd.appendChild(newJsTdText);
    
    let newReactTd = document.createElement('td');
    let newReactTdText = document.createTextNode(newObject.reactInput);
    newReactTd.appendChild(newReactTdText);
    
    let newAverageTd = document.createElement('td');
    let newAverageText = (newObject.reactInput + newObject.jsInput + newObject.htmlInput + newObject.reactInput) / 4;
    let newAverageTdText = document.createTextNode(newAverageText);
    newAverageTd.appendChild(newAverageTdText);
    
    let newDeleteBtnTd = document.createElement("td");
    let newDeleteBtnNode = document.createElement("button");
    
    newDeleteBtnNode.innerText = "x";
    newDeleteBtnNode.setAttribute("data-key",  Math.random());
    newDeleteBtnNode.classList.add("btn-danger");
    newDeleteBtnNode.classList.add("delete-class");
    newDeleteBtnTd.appendChild(newDeleteBtnNode);
    
    newTr.appendChild(newMentorTd);
    newTr.appendChild(newHtmlTd);
    newTr.appendChild(newCssTd);
    newTr.appendChild(newJsTd);
    newTr.appendChild(newReactTd);
    newTr.appendChild(newAverageTd);
    newTr.appendChild(newDeleteBtnTd);
    tBody.appendChild(newTr)

})

let buttons = document.querySelectorAll(".delete-class");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        let customKey = event.target.dataset.key
        mentorsArray.splice(customKey, 1);
        document.getElementById("idbody").deleteRow(customKey);
    })
})