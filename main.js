render = Renderer()
brain = Brainer()

let level = 1

let frogs = []

let time = 4


$('#start-btn').on('click', function () {
    $('#main-container').text('')
    $('#main-container').css('display', 'grid')
    level = 1
    time = 4
    frogs = []
    brain.creatFrogs()
    render.displayFrogs()
    brain.startTimer()
    render.displayLevel()
    render.displayFrogsLeft()
    render.displayGameOn()

    $('#main-container').on('click', 'i', function () {
        $(this).remove()
        render.displayFrogsLeft()
        if ($('i').length === 0) {
            $('#timer').css('color','yellow')
            time+=level
            level++
            brain.creatFrogs()
            render.displayFrogs()
            render.displayLevel()
            render.displayFrogsLeft()
        }
    })

})



