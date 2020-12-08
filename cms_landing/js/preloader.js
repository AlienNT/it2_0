function preloaderFunk(){
    let preloaderCont = document.createElement('div'),
        preloader = document.createElement('div'),
        preloaderEl = document.createElement('div'),
        body = document.querySelector('body')


    preloaderCont.setAttribute('class','preloader-cont')
    preloader.setAttribute('class','preloader')
    preloaderEl.setAttribute('class','preloader-element')
    preloader.append(preloaderEl)
    console.log(preloaderEl);
    preloaderCont.append(preloader)
    body.append(preloaderCont)


}
preloaderFunk()
let preloader = document.querySelector('.preloader-cont')

document.body.onload = function () {
    setTimeout(function (){
        preloader.classList.add('loaded')
    }, 1500)
}