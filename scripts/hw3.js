"use strict";

//Задание 1 и 3 в одном решении (решил совместить)
function calculateData(userNumber){
    let perity
    let integrity
    let quantity
    let rhesus
    let result = ''
    if(userNumber % 2 === 0){
        perity = "Четное число, "
        result += perity
    }else{
        perity = "Нечетное число, "
        result += perity
    }
    if(userNumber % 1 === 0){
        integrity = "Целое число, "
        result += integrity
    }else{
        integrity = "Дробное число, "
        result += integrity
    }
    if(userNumber > 100){
        quantity = "Число больше 100, "
        result += quantity
    }else{
        quantity = "Число меньше или ровно 100, "
        result += quantity
    }
    if(userNumber >= 0){
        rhesus = "Число положительное"
        result += rhesus
    }else{
        rhesus = "Число Отрицательное"
        result += rhesus
    }
    console.log(`${userNumber} ${result}`)
}

function showNumbers(firstUserNum, secondUserNum){
    if(firstUserNum < secondUserNum){
        for(let i = firstUserNum; i <= secondUserNum; i++){
            calculateData(i)
        }
    }else{
        for(let i = firstUserNum; i >= secondUserNum; i--){
            calculateData(i)
        }
    }
}

while(true){
    const firstUserNum = +prompt("Введите первое число")
    const secondUserNum = +prompt("Введите второе число")
    if(Math.abs(firstUserNum - secondUserNum) < 4){
        alert("Слишком маленький диапозон чисел, попробуйте снова")
        continue
    }else{
        showNumbers(firstUserNum, secondUserNum)
        break
    }
}