let container = document.querySelector('#container');
let myAnswer = ''


for (let i = 0; i < data.length; i++) {
    let myDiv = document.createElement("div");

    myDiv.innerHTML = `
        <div class="card" >
            <img src="${data[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">question ${i + 1}</h5>
                <p class="card-text">${data[i].question}</p>
                <input class="answerInput"/>
                <button onclick="getInput(event,'${data[i].answer}')" class="btn btn-primary">Answer the question!</button>
                <p class="result"> <p/>
            </div>
        </div>
    `
    container.appendChild(myDiv);

}

function getInput(event, answer) {
    myAnswer = event.target.parentElement.querySelector('.answerInput').value

    if (myAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
        myAnswer = event.target.parentElement.querySelector('.result').innerHTML = "niceeee"
    } else {
        myAnswer = event.target.parentElement.querySelector('.result').innerHTML = "wrong"
    }

}
