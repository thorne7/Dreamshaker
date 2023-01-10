var highscoreContainer = document.getElementById('highscore-container')

var storage = JSON.parse(localStorage.getItem('highscore'))
// if no highscores are available will show 'No highscores'
if (storage === null) {
    highscoreContainer.textContent = 'No Highscores'
} else {
    // Loop to get all highscores and place them in 'p' element
    highscoreContainer.textContent = ''
    for(var i = 0; i < storage.length; i++) {
        var p = document.createElement('p')
        p.textContent = 'Name: ' + storage[i].name + ' ----- Score: ' + storage[i].currentScore 
        highscoreContainer.append(p)
    }
}
