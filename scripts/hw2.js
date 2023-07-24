"use strict";

//1 задание
/* const userName = prompt("Введите свое имя")
const surName = prompt("Введите свою фамилию")
const nickName = prompt("Введите свой никнейм")
if(userName && surName && nickName){
    alert(`Привет, ${surName} ${userName} ${(nickName)}`)
}else if(userName && surName){
    alert(`Привет, ${surName} ${userName}`)
}else if(userName && nickName){
    alert(`Привет, ${userName} ${(nickName)}`)
}else if(surName && nickName){
    alert(`Привет, ${surName} ${(nickName)}`)
}else if(userName){
    alert(`Привет, ${userName}`)
}else if(surName){
    alert(`Привет, ${surName}`)
}else if(nickName){
    alert(`Привет, ${(nickName)}`)
}else{
    alert("Привет noname")
} */

//2 задание
/* function calculateData(userNumber){
    if(userNumber % 2 === 0){
        alert("Четное число")
    }else{
        alert("Нечетное число")
    }
    if(userNumber % 1 === 0){
        alert("Целое число")
    }else{
        alert("Дробное число")
    }
    if(userNumber > 100){
        alert("Число больше 100")
    }else{
        alert("Число меньше 100")
    }
}

while(true){
    const userNumber = +prompt("Введите число")
    calculateData(userNumber)
    if(+prompt("Если хотите ввести другое число, нажмите 1, если нет, то любую кнопку") === 1){
        continue
    }else{
        break
    }
} */

//3 задание 
/* function countSummOfNumbers(firstNum, secondNum){
    return alert(`Сумма чисел равна: ${firstNum + secondNum}`)
}

while(1){
    const firstNum = +prompt("Введите первое число")
    const secondNum = +prompt("Введите первое число")
    countSummOfNumbers(firstNum, secondNum)
    if(+prompt("Если хотите ввести другие числа, нажмите 1, если нет, то любую кнопку") === 1){
        continue
    }else{
        break
    }
} */

//4 задание 
/* const userAge = +prompt("Введите свой возраст")
userAge > 17 ? alert("Добро пожаловать!") : alert("Доступ запрещен") */

//5 задание
/* const userNumber = prompt("Введите число или строку")
switch (isNaN(userNumber)){
    case true:
        alert("Строка")
        break
    case false:
        alert("Число")
        break
} */