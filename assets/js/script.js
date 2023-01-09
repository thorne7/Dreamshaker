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
        question: '',
        options: '',
        answer: '',
    },
    //3
    {
        question: '',
        options: '',
        answer: '',
    },
    //4        
    {
        question: '',
        options: '',
        answer: '',
    }
]; 

var score = 0;
var timer = 80;

document.getElementById("start").addEventListener("click", startQuiz);

var quizContainer = document.querySelector('.quizContainer')
var timeContainer = document.getElementById('time')

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


