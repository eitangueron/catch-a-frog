$('#time-bar').append('<span id="timer">X seconds left!</span>')

$('#control-panel').append('<span id="frogs-left">X frogs left!</span>')
$('#control-panel').append('<button id="start-btn">start!</button>')
$('#control-panel').append('<span id="level">level X</span>')


// lettersArry = ['a','b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y']
 
// const getRandomNumber = function(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }

// const getRandomLocation = function(){
//     return lettersArry[getRandomNumber(0,lettersArry.length+1)]
// }

const getRandomNumber = function(toprange){   //start 1
    return Math.ceil(Math.random()*toprange)
}



const renderFrogs = function(times){
    for(let i= 0;i<times; i++ ){
        $('#main-container').append(`<i class="fas fa-frog" id="frog${i+1}"></i>`)
        $(`#frog${i+1}`).css('grid-area',`${getRandomNumber(5)}/${getRandomNumber(5)}`)
    }
}




let level = 1

$('#start-btn').on('click',function(){

    $('#main-container').text('')
    
    level = 1

    $('#main-container').on('click','i',function(){
        $(this).remove()
        if($('i').length ===0){
            level++
            renderFrogs(level)
        }
    })
    
    renderFrogs(level)
    
    setTimeout(function(){
        $('#main-container').text('')
        $('#main-container').append("<h1 id='end-time'>Time over!</h1>")
        $('#end-time').css('grid-area','3/3')
    }
    ,5000)
})



