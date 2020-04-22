render = Renderer()
brain = Brainer()

let level = 1

let frogs = []



$('#start-btn').on('click', function () {

    $('#main-container').text('')
    level = 1
    frogs = []

    brain.creatFrogs()
    render.displayFrogs()
    render.displayLevel()
    render.displayFrogsLeft()
    render.displayGameOn()

    $('#main-container').on('click', 'i', function () {
        $(this).remove()
        render.displayFrogsLeft()
        if ($('i').length === 0) {
            level++
            brain.creatFrogs()
            render.displayFrogs()
            render.displayLevel()
            render.displayFrogsLeft()
        }
    })


    setTimeout(function () {
        $('#main-container').text('')
        $('#main-container').append("<h1 id='end-time'>Time over!</h1>")
        $('#end-time').css('grid-area', '3/3')
        render.displayStartAgainButton()
    }
        , 5000)
})



//time = 3
//set interval - if time === 0 => end game fun // else => (time --) & display time func(time)
