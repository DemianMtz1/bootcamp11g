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
const createForm = () => {
    let nodeFormGroup = document.createElement('div')
    nodeFormGroup.classList.add('form-group')
    nodeFormGroup.id = "form-wrapper"
    document.getElementById('newMentorForm').appendChild(nodeFormGroup);

    let mentorLabel = document.createElement('label');
    let signatureHtmlLabel = document.createElement('label');
    let signatureCssLabel = document.createElement('label');
    let signatureJsLabel = document.createElement('label');
    let signatureReactLabel = document.createElement('label');

    mentorLabel.className = 'w-100 font-weight-bold mt-3';
    signatureHtmlLabel.className = 'w-100 font-weight-bold';
    signatureCssLabel.className = 'w-100 font-weight-bold';
    signatureJsLabel.className = 'w-100 font-weight-bold';
    signatureReactLabel.className = 'w-100 font-weight-bold';

    let mentorText = document.createTextNode('Nombre del Mentor:');
    let signatureHtmlText = document.createTextNode('HTML Score:');
    let signatureCssText = document.createTextNode('CSS Score:');
    let signatureJsText = document.createTextNode('Javascript Score:');
    let signatureReactText = document.createTextNode('React Score:');

    let mentorInput = document.createElement('input');
    let htmlInput = document.createElement('input');
    let cssInput = document.createElement('input');
    let jsInput = document.createElement('input');
    let reactInput = document.createElement('input');

    mentorInput.classList.add('form-control');
    htmlInput.classList.add('form-control');
    cssInput.classList.add('form-control');
    jsInput.classList.add('form-control');
    reactInput.classList.add('form-control');

    mentorInput.id = "mentorInput"
    htmlInput.id = "htmlInput"
    cssInput.id = "cssInput"
    jsInput.id = "jsInput"
    reactInput.id = "reactInput"

    mentorLabel.appendChild(mentorText);
    signatureHtmlLabel.appendChild(signatureHtmlText);
    signatureCssLabel.appendChild(signatureCssText);
    signatureJsLabel.appendChild(signatureJsText);
    signatureReactLabel.appendChild(signatureReactText);

    let submitBtn = document.createElement('button');
    let mentorBtnTxt = document.createTextNode('Agregar mentor');

    submitBtn.className = 'btn btn-success mb-3 w-100';
    submitBtn.id = 'submitBtn';
    submitBtn.appendChild(mentorBtnTxt);

    document.getElementById('form-wrapper').appendChild(mentorLabel);
    document.getElementById('form-wrapper').appendChild(mentorInput);

    document.getElementById('form-wrapper').appendChild(signatureHtmlLabel);
    document.getElementById('form-wrapper').appendChild(htmlInput);

    document.getElementById('form-wrapper').appendChild(signatureCssLabel);
    document.getElementById('form-wrapper').appendChild(cssInput);

    document.getElementById('form-wrapper').appendChild(signatureJsLabel);
    document.getElementById('form-wrapper').appendChild(jsInput);

    document.getElementById('form-wrapper').appendChild(signatureReactLabel);
    document.getElementById('form-wrapper').appendChild(reactInput);

    document.getElementById('btn-section').appendChild(submitBtn);
}



const PrintTables = (array) => {
    var mytable = document.createElement("table")

    mytable.className = "table table-striped table-dark"
    var myThead = document.createElement("thead")
    var mytr = document.createElement("tr")

    let columH = ["Mentor", "HTML", "CSS", "JS", "ReactJS", "Promedio ", ""]


    columH.forEach((header) => {
        var thName = document.createElement("th")
        var textTitle = document.createTextNode(header)
        thName.appendChild(textTitle)
        mytr.appendChild(thName)
        myThead.appendChild(mytr)
    })
    mytable.appendChild(myThead)

    var tBody = document.createElement("tbody")
    tBody.setAttribute("id", "idbody");

    let generalAverage = 0
    array.forEach((mentor, index) => {

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

            scoreMentor.score < 9 ? tdHtml.classList.add("bg-warning") : tdHtml.classList.add("bg-success")

            tdHtml.appendChild(texHtml)
            trcolum.appendChild(tdHtml)

        })

        let deleteButton = document.createElement("td")
        let deleteButton2 = document.createElement("button")
        deleteButton2.innerText = "x"
        deleteButton2.setAttribute("data-key", index);
        deleteButton2.classList.add("btn-danger")
        deleteButton2.classList.add("delete-class")

        let scoreAverage = averageacum / mentor.scores.length
        let averagetxt = document.createTextNode(scoreAverage)
        generalAverage += scoreAverage
        deleteButton.appendChild(deleteButton2)
        tdAverage.appendChild(averagetxt)
        trcolum.appendChild(tdAverage)
        trcolum.appendChild(deleteButton)
        tBody.appendChild(trcolum)

    })

    let avegareMentor = generalAverage / array.length

    mytable.appendChild(tBody)
    document.body.appendChild(mytable)


    
    // create form
    createForm();
    
    // add new data
    let btnSubmitNode = document.querySelector('#submitBtn');
    
    
    let newObject = {};
    let buttons = document.querySelectorAll(".delete-class");
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
        newDeleteBtnNode.setAttribute("data-key",  (array.length-1));
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
        buttons = document.querySelectorAll(".delete-class");
        
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                let customKey = event.target.dataset.key
                mentorsArray.splice(customKey, 1);
                document.getElementById("idbody").deleteRow(customKey);
            })
        })
    })
    
    
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            let customKey = event.target.dataset.key
            mentorsArray.splice(customKey, 1);
            document.getElementById("idbody").deleteRow(customKey);
        })
    })
    
}

PrintTables(mentorsArray);