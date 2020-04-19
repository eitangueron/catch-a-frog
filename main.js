$('#time-bar').append('<span id="timer">X seconds left!</span>')

$('#control-panel').append('<span id="frogs-left">X frogs left!</span>')
$('#control-panel').append('<button id="start-btn">start!</button>')
$('#control-panel').append('<span id="level">level X</span>')


lettersArry = ['a','b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y']
 
const getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const getRandomLocation = function(){
    return lettersArry[getRandomNumber(0,lettersArry.length+1)]
}

$('#main-container').append('<i class="fas fa-frog" id="frog"></i>')
// $('#frog').css('font-size','50px')

$('#frog').css('grid-area',getRandomLocation())

$('#main-container').on('click','#frog',function(){
    $(this).remove()
})
