const Brainer = function(){

    ///Frog creation:


    const frogStyles = []

    const creatFrogStyleArry = () => {
        frogStyles.length = 0
        for(let i=1; i<6; i++){
            for(let j=1; j<6; j++){
                frogStyles.push({gridArea:`${i}/${j}`, fontSize:`${i*10}px`})
            }
        }
    }

    
    const getRandomElement = function(array){
        return array[Math.floor(Math.random() * array.length)]
    }
    
    
    const getFrogStyle = () => {
        let frogStyleObj = getRandomElement(frogStyles)
        frogStyles.splice(frogStyles.indexOf(frogStyleObj),1)
        return frogStyleObj
    }
    

    const getRandomColor = () => {
        const colorArray = ['black','red','orange','yellow','purple','blue','brown','pink','white','gray']
        return getRandomElement(colorArray)
    }

    const creatFrogs = function () {
        creatFrogStyleArry()
        frogs = []
        for (let i = 0; i < level; i++) {
            let frosStyleObj = getFrogStyle()
            let gridArea = frosStyleObj.gridArea  
            let fontSize = frosStyleObj.fontSize
            let frogColor = getRandomColor()                                    
            let frog = `<i class="fas fa-frog" id="frog${i + 1}"style="grid-area: ${gridArea}; color: ${frogColor}; font-size:${fontSize}"></i>`
            frogs.push(frog)
        }
    }



    ///Timer creation:


    const displayTime = function(time){
        $('#timer').text(`${time} seconds left!`)
        // $('#timer').fadeIn(990).fadeOut(10)
    }



    const startTimer = function(){
        let timeID = setInterval(() => {
            if(time === 0){
                // $('#timer').text('Time over!')
                $('#main-container').text('')
                $('#main-container').append("<h1 id='end-time'>Time over!</h1>")
                $('#end-time').css('grid-area', '3/3')
                $('#end-time').css('color', 'red')
                render.displayStartAgainButton()
                clearInterval(timeID)
            } else{
                if(time<=4){
                    $('#timer').css('color','red')
                    time--
                    displayTime(time)
                } else{
                    $('#timer').css('color','black')
                    time--
                    displayTime(time)
                }
            }
        
        }, 1000);
    }



    return{
        creatFrogs,
        startTimer
    }

}













// const getRandomNumber = function (toprange) {   //start 1
    //     return Math.ceil(Math.random() * toprange)
    // }
    

 // $('#main-container').append(frog)
// $(`#frog${i + 1}`).css('grid-area', `${getRandomNumber(5)}/${getRandomNumber(5)}`)








// let level=1
// const frogs = []

// const getRandomNumber = function (toprange) {   //start 1
//     return Math.ceil(Math.random() * toprange)
// }



// const creatFrogs = function () {
//     for (let i = 0; i < level; i++) {
//         // frogs.push(`<i class="fas fa-frog" id="frog${i + 1}"></i>`)
//         $('#main-container').append(`<i class="fas fa-frog" id="frog${i + 1}"></i>`)
//         $(`#frog${i + 1}`).css('grid-area', `${getRandomNumber(5)}/${getRandomNumber(5)}`)
//     }
// }

// const displayTimer = function(time){
//     $('#timer').text(`${time} seconds left!`)
// }

// let time = 6





    // setTimeout(function () {
    //     $('#main-container').text('')
    //     $('#main-container').append("<h1 id='end-time'>Time over!</h1>")
    //     $('#end-time').css('grid-area', '3/3')
    //     render.displayStartAgainButton()
    // }
    //     , 10000)