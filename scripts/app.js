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

// const enterAge = prompt('Введите свой возвраст')
// switch(+enterAge) {
//     case 18 : 
//         console.log('18')
//         break
//     case 20 :
//         console.log('20')
//         break
//     default:
//         console.log('Default')
// }

// function getSumTwoNumber(numFirst, numSecond){
//     return numFirst + numSecond
// }
// getSumTwoNumber(1, 2)

// const bar = () => {
//     return numFirst + numSecond
// }
// const bar = () =>  numFirst + numSecond

// (function getSum(numFirst, numSecond){
//     console.log(numFirst + numSecond)
// })()

// let count = 0
// while(count < 5){
//     count++
//     console.log(count)
// }

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// let str = 'hello hello hello'
// console.log(str)
// let strUpp = str.toUpperCase()
// console.log(strUpp)
// let strLow = str.toLowerCase()
// console.log(strLow)
// console.log(str.length)
// console.log(str.repeat(3))
// console.log(str.split(' ').join())
// let newArr = str.slice(0,2)
// console.log(newArr)
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
// const firstNumber = prompt('Введите первое число')
// const secondNumber = prompt('Введите второе число')
// const numbersSumma = alert(`Сумма введенных цифр равна ${+firstNumber + +secondNumber}`)

//3 задание
// const userName = prompt('Введите свое имя')
// const userAge = prompt('Введите свой возвраст')
// const limitedAge = 17
// if(userAge > limitedAge){
//     alert('Добро пожаловать!')
// } else {
//     alert('Доступ закрыт :(')
// }

//4задание
// const testX = confirm("Хотите ввести название блока?");
// if (testX) {
//   const testY = prompt("Введите название блока");
//   const testA = prompt("Введите название эллемента");
// }
// alert(testY);
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
