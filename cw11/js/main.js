$(function () {
    let form = $('.form'),
        checkBoxesCont = $('.checkbox-cont'),
        textInputs = $('.inputs-cont input , .inputs-cont textarea'),
        radioInputCont = $('.radio-cont'),
        checkRadioInputs = $('.radio-cont input[type=radio]:checked').length,
        checkCount = $('input[type=checkbox]:checked').length
    form.on('submit', function (event) {
        event.preventDefault()
        checkCount > 3 || checkCount < 1 ?
            checkBoxesCont.addClass('warning'):
            checkBoxesCont.removeClass('warning')
        checkRadioInputs < 1 ?
            radioInputCont.addClass('warning'):
            radioInputCont.removeClass('warning')
        isEmpty()
        textInputs.on('input', function (){
            isEmpty()
        })
        $('.warning').length !== 0 ? console.log('bad'): alert('Данные успешно сохранены')
    })
    function isEmpty() {
        for (let input of textInputs){
            if (input.value.length === 0) {
                input.classList.add('warning')
                input.placeholder = 'Поле обязательно к заполнению!'

            } else {
                input.classList.remove('warning')
                input.placeholder = ''
            }
        }
    }
})

