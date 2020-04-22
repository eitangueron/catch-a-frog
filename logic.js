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

const Brainer = function(){


    const getRandomNumber = function (toprange) {   //start 1
        return Math.ceil(Math.random() * toprange)
    }



    const creatFrogs = function () {
        frogs = []
        for (let i = 0; i < level; i++) {
            let frog = `<i class="fas fa-frog" id="frog${i + 1}" 
            style="grid-area: ${`${getRandomNumber(5)}/${getRandomNumber(5)}`};"></i>`
            frogs.push(frog)
            // $('#main-container').append(frog)
            // $(`#frog${i + 1}`).css('grid-area', `${getRandomNumber(5)}/${getRandomNumber(5)}`)
        }
    }

    return{
        creatFrogs
    }

}




// const renderFrogs = function (times) {
//     for (let i = 0; i < times; i++) {
//         $('#main-container').append(`<i class="fas fa-frog" id="frog${i + 1}"></i>`)
//         $(`#frog${i + 1}`).css('grid-area', `${getRandomNumber(5)}/${getRandomNumber(5)}`)
//     }
// }