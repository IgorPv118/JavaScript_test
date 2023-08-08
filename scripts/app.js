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
// const firstNum = +prompt('Введите первое число')
// const mathOperator = +prompt('Введите действие (знаки: + - * /)')
// const secondNum = +prompt('Введите второе число')
// if(mathOperator === '+'){
//     alert(firstNum + secondNum)
// }else if(mathOperator === '-'){
//     alert(firstNum - secondNum)
// }else if(mathOperator === '*'){
//     alert(firstNum * secondNum)
// }else if(mathOperator === '/'){
//     alert(firstNum / secondNum)
// }else{
//     alert('Вы ввели неверное действие :(')
// }
// console.log(null || 1)

/* const arr = ['about', 'About']


console.log(arr.sort())
console.log(numArr.sort((a, b) => a - b))
console.log(arr.sort((a, b) => a > b ? 1 : -1))

const filterArr = numArr.filter(i => i < 3)
console.log(filterArr) */
/* const numArr = [1000,2,1,3, null, undefined, false, 0]
const newArr = numArr.filter(i => Boolean(i))
console.log(newArr) */

/* const arr = [1,2,3,4,]
arr.push(5) // Добавляем значение в массив последним эллементом
console.log(arr)
arr.pop() // Удаляем последний эллемент
console.log(arr) */
//лучше не использовать
/* arr.unshift(0) // добавляет в начало 
console.log(arr)
arr.shift(0) // удаляет первый эллемент
console.log(arr) */

/* function getValue(arr){
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 1){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(getValue([1,2,3])) */

/* const arr = [[1,2,3]] */
/* arr.forEach(i => console.log(i)) // Только пробегаем по циклу
arr.map(i => console.log(i))  // Тоже самое, только можно добавлять условие */
/* console.log(arr.flat()) */ // поднимаем массив на уровень выше

/* const arr = [
    [
        1,0,1,
        0,1,1,
        0,0,1
    ]
]
function getOneNumber(array){
    const newArr = array.flat()
    let count = 0
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === 1){
            count += 1
        }
    }
    return count
}
console.log(getOneNumber(arr)) */

/* const person = {
  name: "Игорь",
  age: 23,
  skills: {
    react: true,
    angular: false,
  },
  sayHi: function () {
    return `Hello ${this.name}`;
  },
  sayHiArrow: () => {
    return `Hello ${this.name}`; //Зиз не работает в стрелочной функции
  },
};  */
/* console.log(person.sayHiArrow()) */
/* console.log(Object.keys(person)) */
/* console.log(Object.values(person))
console.log(Object.entries(person))
console.log(Object.is(NaN, NaN)) // проверка на равенство */

/* const obj = {
  a: 1,
  b: 2,
  k: {
    a: 1,
    b: 2,
  },
}; */
/* const obj1 = { ...obj }; // копирование объекта */
/* const obj1 = JSON.parse(JSON.stringify(obj)) // полное копирование объекта

obj1.k.a = 3;
console.log(obj);
console.log(obj1); */


/* let a = +prompt("one")
let b = +prompt("two")
let c = a
do{
  console.log(c)
  c++
}while (c <= b) */

/* function minNumber(arr){
  return Math.min(...arr)
}
console.log(minNumber([34, 15, 88, 2])) */

/* const a = [1,2,3]
const b = ['a', 'b']
// const c = a.concat(b)
const c = [...a, ...b]
console.log(c) */

//const arr = [1, 2, 3]
/* const arr = new Array(3).fill(1)
console.log(arr)
 */
/* const arr = []
console.log(Array.isArray(arr)) */ // проверка на массив

/* const movies = [
  {
    title: "terminator",
    date: 1994,
    rating: 10,
    genre: "action",
  },
  {
    title: "titanic",
    date: 1992,
    rating: 2,
    genre: "romantic",
  },
  {
    title: "saw",
    date: 2004,
    rating: 6,
    genre: "horror",
  },
];
const movieAction = movies.filter((movie) => movie.title === "terminator" ? movie.title = "robocop": movie.title = movie.title)
const movieChangeTitle = movies.map(movie => movie.title === "terminator" ? movie.title = "robocop": movie.title = movie.title)
console.log(movieChangeTitle) 
console.log(movies)  */
/* console.log(numArr.sort((a, b) => a - b)) */

/* const arrAny = [1, 2, 3] */
/* const arrAny1 = arrAny.includes(0) */ // Проверка, входит ли значение в массив
/* const arrAny1 = arrAny.some(i => i === 1) */ // Проверка, входит ли значение в массив хотя бы 1 раз
/* const arrAny1 = arrAny.every(i => i === 1) */ // Проверка, все ли значения равны вашему значению
/* console.log(arrAny1) */