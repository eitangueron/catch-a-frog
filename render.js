const Renderer = function(){

    
    
    const displayLevel =function(){
        $('#level').text(`Level ${level}`)
    }


    const displayFrogsLeft = function(){
        $('#frogs-left').text(`${$('i').length} frogs left!`)
    }

    const displayGameOn = function(){
        $('#start-btn').text('Catch the frogs!')
    }

    const displayStartAgainButton = function(){
        $('#start-btn').text('Try again!')
    }


    const displayFrogs = function () {
        for (let frog of frogs) {
            $('#main-container').append(frog)
        }
    }



    return{
        displayFrogs,
        displayStartAgainButton,
        displayGameOn,
        displayFrogsLeft,
        displayLevel,
        // displayTime,
    }
}





// baseDisplay,

 // const baseDisplay = function(){
    //     $('#time-bar').append('<span id="timer">X seconds left!</span>')
    //     $('#control-panel').append('<span id="frogs-left">X frogs left!</span>')
    //     $('#control-panel').append('<button id="start-btn">start!</button>')
    //     $('#control-panel').append('<span id="level">level X</span>')
    // }




// render.baseDisplay()
// lettersArry = ['a','b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y']

// const getRandomNumber = function(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }

// const getRandomLocation = function(){
//     return lettersArry[getRandomNumber(0,lettersArry.length+1)]
// }