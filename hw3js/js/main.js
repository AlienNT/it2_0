// let numbers = [329, 456, 10563, 4679, 15479]
// let denominator = 7
// for (let number of numbers) {
//     let result = number % denominator
//     if (result === 0) {
//         console.log(result)
//         console.log(`число ${number} кратно ${denominator}`)
//     } else {
//         console.log(result)
//         console.log(`число ${number} не кратно ${denominator}`)
//     }
// }
// let numbers2 = [8 ** 5, 4 ** 4, 46 ** 8, 6 ** 3, 8 ** 7, 24 ** 9, 12 ** 3, 34 ** 9, 2 ** 10, 436 ** 7]
// for (let number of numbers2) {
//     console.log(number)
// }

// alert(null || 88 || undefined)           //88
// alert(alert(7) || 8 || alert(alert(9)))  //7,8
// alert(9 && null && 8)                    //null
// alert(alert(11) && alert(22))            //11, undefined
// alert(null || 23 && 33 || 44)            //33

// let result,
//     a = +prompt('Первое число'),
//     b = +prompt('Второе число')
// if (a + b < 8) {
//     result = 'Мало'
//     console.log(result)
// } else {
//     result = 'Достаточно'
//     console.log(result)
// }
// let result2 = (a + b < 8) ? 'Мало' : 'Достаточно'
// console.log(result2)
//
//
// let age = prompt('Проверяемое число')
// if (age >= 24 && age <= 70) {
//     console.log(`Число ${age} в диапазоне`)
// } else {
//     console.log(`Число ${age} вне диапазона`)
// }
// age = (age >= 24 && age <= 70) ? `Число ${age} в диапазоне`:`Число ${age} вне диапазона`
// console.log(age)




let btnCheck = document.getElementsByClassName('button')[0],
    btnClean = document.getElementsByClassName('button')[1],
    inputs = document.getElementsByClassName('input'),
    min = document.getElementById('min'),
    max = document.getElementById('max'),
    num = document.getElementById('num'),
    results = document.getElementById('result')


//проверка выполнения условия и стилизация
btnCheck.onclick = function () {
    if (num.value.length > 0 && min.value.length > 0 && max.value.length > 0) {

        if (num.value >= min.value && num.value <= max.value) {
            results.textContent = 'В диапазоне'
            results.style.color = 'green'
        } else {
            results.textContent = 'Вне диапазона'
            results.style.color = 'orange'
        }
    } else {
        results.textContent = 'Неверно задано условие'
        results.style.color = 'red'
        for (let input of inputs) {
            input.classList.add('invalid')
        }
    }
}

//окрашивание пустых полей при потере фокуса
for (let input of inputs) {
    input.onblur = function () {
        if (input.value.length === 0) {
            input.classList.add('invalid')
        } else {
            input.classList.remove('invalid')
        }
    }
}
//кпопка очистки полей
btnClean.onclick = function () {
    for (let input of inputs) {
        input.value = ''
    }
}
