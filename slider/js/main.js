let arrowPrev = document.getElementsByClassName('arrow-prev'),
    arrowNext = document.getElementsByClassName('arrow-next'),
    slides = document.getElementsByClassName('slide'),
    slidingPrev = 0,
    sliding = 0,
    transForm

let sliderLength = slides.length

//
// arrowPrev[0].onclick = function () {
//     slidingPrev = slidingPrev + 100
//     transForm = `translateX(${(sliding + slidingPrev)}%)`
//     for (let slide of slides) {
//         slide.style.transform = `${transForm}`
//     }
//     if (slidingPrev  === 0) {
//         slidingPrev = sliderLength * (-100)
//     }
// }
// arrowNext[0].onclick = function () {
//     slidingPrev = slidingPrev - 100
//     transForm = `translateX(${(sliding + slidingPrev)}%)`
//     for (let slide of slides) {
//         slide.style.transform = `${transForm}`
//     }
//     if (slidingPrev / sliderLength === 100 || slidingPrev / (sliderLength - 1) === -100) {
//         slidingPrev = 100
//     }
// }

//
arrowPrev[0].onclick = function () {
    if (slidingPrev  === 0) {
        slidingPrev = sliderLength * (-100)
    }
    slidingPrev = slidingPrev + 100
    transForm = `${(sliding + slidingPrev)}%`
    slides[0].style.marginLeft = `${transForm}`
}
arrowNext[0].onclick = function () {
    if (slidingPrev / (sliderLength - 1) === -100) {
        slidingPrev = 100
    }
    slidingPrev = slidingPrev - 100
    transForm = `${(sliding + slidingPrev)}%`
    slides[0].style.marginLeft = `${transForm}`
}


