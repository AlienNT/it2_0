'use strict'

let navigation  = document.querySelector('.nav'),
    links       = navigation.querySelectorAll('a')
navigation.onclick = function (event) {
    let target = event.target
    for (let link of links) {
        link.classList.remove('active')
    }
    target.classList.add('active')
}
let contactForm = document.querySelector('.contact_form')
contactForm.onsubmit = function (e)  {
    e.preventDefault()
    let inputs = contactForm.querySelectorAll('label > *')
    for (let input of inputs) {
        if (input.value.length < 1) {
            input.style.cssText = 'background: #fdd6d6'
            input.placeholder = 'Поле не должно быть пустым'
        } else {
            input.style.cssText = ''
        }
    }
}
let targetLinks = document.querySelectorAll('.main__screen-1 .contact-cont a'),
    saveValue   = []
for (let link of targetLinks) {
    if (link.innerText.length > 0) saveValue.push(link.innerText)
}

function hideLinkContent() {
    if (window.innerWidth <= 600) {
        for (let link of targetLinks) {
            link.innerText = ''
        }

    } else {
        for (let i = 0; i < targetLinks.length; i++) {
            targetLinks[i].innerText = `${saveValue[i]}`
        }
    }
}

function toggleNav() {
    let hamburger   = document.querySelector('.hamburger'),
        nav         = document.querySelector('.nav')
    window.onclick  = function (e){
        let target  = e.target
        if (target.closest('.hamburger')) {
            if (hamburger.classList.contains('hamburger_active')) {
                hamburger.classList.remove('hamburger_active')
                nav.classList.remove('show')
            } else {
                hamburger.classList.add('hamburger_active')
                nav.classList.add('show')
            }
        } else {
            hamburger.classList.remove('hamburger_active')
            nav.classList.remove('show')
        }
    }
}

function toggleArrowTop() {
    let windowHeight    = window.innerHeight,
        currentPos      = window.pageYOffset,
        arrow           = document.querySelector('.arrow_top')
    currentPos < windowHeight ?
        arrow.style.cssText = 'opacity: 0; visibility:hidden;' :
        arrow.style.cssText = ''

}
window.onresize = function () {
    hideLinkContent()

}
hideLinkContent()
toggleNav()
toggleArrowTop()
window.onscroll = function (){
    toggleArrowTop()
}