// Quiz Questions
var questions = [
    //1
    {
        question: 'Which of these is requied to create a string',
        options: [ '{ }','( )','" "','< >'],
        answer: '" "'
       
    },
        
    //2
    {
        question: 'A local scope mean that a variable is decalred within a/an...',
        options: [ 'for Loop', 'function', '.js file', 'Array' ],
        answer: 'function',
    },
    //3
    {
        question: 'the first character beginning in a Array is ... ',
        options: [ '1', 'A', '0', 'a' ],    
        answer: '0',
    },
    //4        
    {
        question: 'What events can an Event Listener handle',
        options: ['Click', 'Key Up', 'Double Click', 'Key Down', 'All of the Above'],
        answer: 'All of the Above',
    }
]; 

var score = 0;
var timer = 80;

document.getElementById("start").addEventListener("click", startQuiz);
document.getElementById("highscores").addEventListener("click", highscorebtn);

var quizContainer = document.querySelector('.quizContainer')
var timeContainer = document.getElementById('time')
// var highscoreContainer = document.getElementById('highscore')
var storage = JSON.parse(localStorage.getItem('highscore'))

function startQuiz() {
    quizContainer.innerHTML = ""
    startTimer()
    displayQuestionOne()
}

function startTimer() {
    timeContainer.textContent = timer
    var setTime = setInterval(function() {
        if (timer <= 1) {
            clearInterval(setTime)
        }
        timer--
        timeContainer.textContent = timer
    }, 1000)
}

function displayQuestionOne() {
    var questionEl = document.createElement('h1')
    questionEl.textContent = questions[0].question
    quizContainer.append(questionEl)

    var optionsContainer = document.createElement('ul')
    quizContainer.append(optionsContainer)
    for (var i = 0; i < questions[0].options.length; i++) {
        var listItems = document.createElement('li')
        listItems.setAttribute('id', questions[0].options[i])
        listItems.textContent = questions[0].options[i]
        optionsContainer.append(listItems)

        listItems.addEventListener('click', function (event) {
            if (event.target.id === questions[0].answer) {
                console.log('correct');
                score += 20
            } else {
                console.log('incorrect');
                timer -= 10
            }
            displayQuestionTwo()
        })
    }
}

function displayQuestionTwo() {
    quizContainer.innerHTML = ""
    var questionEl = document.createElement('h1')
    questionEl.textContent = questions[1].question
    quizContainer.append(questionEl)

    var optionsContainer = document.createElement('ul')
    quizContainer.append(optionsContainer)
    for (var i = 0; i < questions[1].options.length; i++) {
        var listItems = document.createElement('li')
        listItems.setAttribute('id', questions[1].options[i])
        listItems.textContent = questions[1].options[i]
        optionsContainer.append(listItems)

        listItems.addEventListener('click', function (event) {
            if (event.target.id === questions[1].answer) {
                console.log('correct');
                score += 20
            } else {
                console.log('incorrect');
                timer -= 10
            }
            displayQuestionThree()
        })
    }
}

function displayQuestionThree() {
    quizContainer.innerHTML = ""
    var questionEl = document.createElement('h1')
    questionEl.textContent = questions[2].question
    quizContainer.append(questionEl)

    var optionsContainer = document.createElement('ul')
    quizContainer.append(optionsContainer)
    for (var i = 0; i < questions[2].options.length; i++) {
        var listItems = document.createElement('li')
        listItems.setAttribute('id', questions[2].options[i])
        listItems.textContent = questions[2].options[i]
        optionsContainer.append(listItems)

        listItems.addEventListener('click', function (event) {
            if (event.target.id === questions[2].answer) {
                console.log('correct');
                score += 20
            } else {
                console.log('incorrect');
                timer -= 10
            }
            displayQuestionFour()
        })
    }
}

function displayQuestionFour() {
    quizContainer.innerHTML = ""
    var questionEl = document.createElement('h1')
    questionEl.textContent = questions[3].question
    quizContainer.append(questionEl)

    var optionsContainer = document.createElement('ul')
    quizContainer.append(optionsContainer)
    for (var i = 0; i < questions[3].options.length; i++) {
        var listItems = document.createElement('li')
        listItems.setAttribute('id', questions[3].options[i])
        listItems.textContent = questions[3].options[i]
        optionsContainer.append(listItems)

        listItems.addEventListener('click', function (event) {
            if (event.target.id === questions[3].answer) {
                console.log('correct');
                score += 20
            } else {
                console.log('incorrect');
                timer -= 10
            }
            endQuiz()
        })
    }
}
// fixing storage & high score 
function endQuiz() {
    quizContainer.textContent = 'Quiz is over your final score is: ' + score

    var input = document.createElement('input')
    input.setAttribute('placeholder', 'What is you name?')
    quizContainer.append(input)

    var btn = document.createElement('button')
    btn.textContent = 'Submit'
    quizContainer.append(btn)

    btn.addEventListener('click', function() {
        var storage = JSON.parse(localStorage.getItem('highscore'))
        if(storage === null) {
            storage = []
        }

        var user = {
            name: input.value,
            currentScore: score
        }

        storage.push(user)
        localStorage.setItem('highscore', JSON.stringify(storage))
        highscorebtn
    })

};

function highscorebtn() {
    var storage = JSON.parse(localStorage.getItem('highscore'))

    if (storage === null) {
        highscore.textContent = 'No Highscores'
    } else {
        highscore.textContent = ''
        for(var i = 0; i < storage.length; i++) {
            var p = document.createElement('p')
            p.textContent = 'Name: ' + storage[i].name + ' ----- Score: ' + storage[i].currentScore 
            highscore.append(p)
        }
    }
}