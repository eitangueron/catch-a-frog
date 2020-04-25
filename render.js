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
    }
}


