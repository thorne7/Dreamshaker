// Quiz Questions
var questions = [
    //1
    {
        question:
        options: 
        answer: 
    },

    //2
    {
        question: 
        options:
        answer: 
    },
    //3
    {
        question: 
        options:
        answer: 
    },
    //4        
    {
        question:
        options: 
        answer: 
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