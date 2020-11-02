'use strict'
let arrowPrev, arrowNext, slides, slidingPrev, sliding, transForm, sliderLength, b, slideSize;
arrowPrev = document.querySelector('.arrow-prev');
arrowNext = document.querySelector('.arrow-next');
slides = document.querySelectorAll('.slide');
slidingPrev = 0;
sliding = 0;
sliderLength = slides.length;
b = 0

//заменитель медиа, тоггл класса для показа 2-х слайдов
function toggleClassSlider() {
    for (let slide of slides) {
        if (window.innerWidth >= 768) {
            slide.classList.add('slide-to-show--2')

        } else {
            slide.classList.remove('slide-to-show--2')
        }
    }
}

//события при ресайзе, показ одного / двух слайдов со смещением
slideSize = window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        if (slidingPrev / (sliderLength - (1 + b)) <= -100) {
            transForm = `translateX(${(sliding + slidingPrev + 100)}%)`
            for (let slide of slides) {
                slide.style.transform = `${transForm}`
            }
            slides[0].style.marginLeft = `${transForm}`
        }
    } else {
        transForm = `translateX(${(sliding + slidingPrev)}%)`
        for (let slide of slides) {
            slide.style.transform = `${transForm}`
        }
        slides[0].style.marginLeft = `${transForm}`
    }
    toggleClassSlider()
    sizeCalc()

})

// проверка условия для отображения двух слайдов
function sizeCalc() {
    if (slides[0].classList.contains('slide-to-show--2')) {
        b = 1
    } else {
        b = 0
    }
}

//просерка при загрузке страницы
window.addEventListener('load', function () {
    console.log('load')
    toggleClassSlider()
    sizeCalc()
})

// слушатель на клик по стрелкам
function slidePrevFunc() {
    if (slidingPrev === (0)) {
        slidingPrev = (sliderLength * (-100)) + (100 * b)
    }
    slidingPrev = slidingPrev + 100
    transForm = `translateX(${(sliding + slidingPrev)}%)`
    for (let slide of slides) {
        slide.style.transform = `${transForm}`
    }
    slides[0].style.marginLeft = `${transForm}`
}

function slideNextFunc() {
    if (slidingPrev / (sliderLength - (1 + b)) <= -100) {
        slidingPrev = 100
    }
    slidingPrev = slidingPrev - 100
    transForm = `translateX(${(sliding + slidingPrev)}%)`
    for (let slide of slides) {
        slide.style.transform = `${transForm}`
    }
}

arrowPrev.onclick = function slidePrev() {
    slidePrevFunc()

}
arrowNext.onclick = function slideNext() {
    slideNextFunc()

}

// слушатель на стрелки
document.addEventListener('keydown', function (event) {
    if (event.code === "ArrowRight") {
        slideNextFunc()
    } else if (event.code === "ArrowLeft") {
        slidePrevFunc()
    }
})


//автоплей
function autoPlay() {
    setInterval(slideNextFunc, 5000)
}

autoPlay()


// прелоадер
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}



