"use strict";
// number 1 2 3 1.5
//string Строки "cat" 'cat' `cat`
//boolean True False
//object {name: "Igor"} - object  [] - array
//Symbol {'name': "Igor", name: Igor}
//undefined 
//null
//BigInt 
// + - * / % ** typeof(Возвращает тип значения)

//1 задание
// const userName = prompt('Enter your name:')
// const printHello = ('Hello,')
// if(userName === ''){
//     alert("You didn't enter a name")
// } else if (userName === null){
//     alert('You click on cancel')
// } else {
//     alert(printHello + userName)
// }

//2 задание
const firstNumber = prompt('Введите первое число')
const secondNumber = prompt('Введите второе число')
const numbersSumma = alert(`Сумма введенных цифр равна ${+firstNumber + +secondNumber}`)

//3 задание
// const userName = prompt('Введите свое имя')
// const userAge = prompt('Введите свой возвраст')
// const limitedAge = 17
// if(userAge > limitedAge){
//     alert('Добро пожаловать!')
// } else {
//     alert('Доступ закрыт :(')
// }

//5 задание
// const firstNum = prompt('Введите первое число')
// const mathOperator = prompt('Введите действие (знаки: + - * /)')
// const secondNum = prompt('Введите второе число')
// if(mathOperator === '+'){
//     alert(+firstNum + +secondNum)
// }else if(mathOperator === '-'){
//     alert(firstNum - secondNum)
// }else if(mathOperator === '*'){
//     alert(firstNum * secondNum)
// }else if(mathOperator === '/'){
//     alert(firstNum / secondNum)
// }else{
//     alert('Вы ввели неверное действие :(')
// }
// console.log()