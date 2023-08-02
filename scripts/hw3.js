"use strict";

//Задание 1

/* function showNumbers(firstUserNum, secondUserNum) {
  if (firstUserNum < secondUserNum) {
    for (let i = firstUserNum; i <= secondUserNum; i++) {
      console.log(i);
    }
  } else {
    for (let i = firstUserNum; i >= secondUserNum; i--) {
      return i;
    }
  }
}

while (true) {
  const firstUserNum = +prompt("Введите первое число");
  const secondUserNum = +prompt("Введите второе число");
  if (Math.abs(firstUserNum - secondUserNum) < 4) {
    alert("Слишком маленький диапозон чисел, попробуйте снова");
    continue;
  } else {
    showNumbers(firstUserNum, secondUserNum);
    break;
  }
} */

//2 задание

/* const pinCode = 7777;
const pukCode = 1234;
const attempts = 3;

for (let i = 0; i < attempts; i++) {
  const userChoicePin = +prompt("Введите секретный pin-code");
  if (userChoicePin === pinCode) {
    alert("Pin-code верный");
    break;
  } else {
    alert("Pin-code не верный. Попробуйте снова");
    if (i === attempts - 1 && userChoicePin !== pinCode) {
      for (let k = 0; k < attempts; k++) {
        const userChoicePuk = +prompt("Введите секретный puk-code");
        if (userChoicePuk === pukCode) {
          alert("Puk-code верный.");
          break;
        } else {
          alert("Puk-code не верный. Попробуйте снова");
        }
      }
    }
  }
} */

//3 задание
/* function calculateData(userNumber) {
  let perity;
  let integrity;
  let quantity;
  let rhesus;
  let result = "";
  if (userNumber % 2 === 0) {
    perity = "Четное число, ";
    result += perity;
  } else {
    perity = "Нечетное число, ";
    result += perity;
  }
  if (userNumber % 1 === 0) {
    integrity = "Целое число, ";
    result += integrity;
  } else {
    integrity = "Дробное число, ";
    result += integrity;
  }
  if (userNumber > 100) {
    quantity = "Число больше 100, ";
    result += quantity;
  } else {
    quantity = "Число меньше или ровно 100, ";
    result += quantity;
  }
  if (userNumber >= 0) {
    rhesus = "Число положительное";
    result += rhesus;
  } else {
    rhesus = "Число Отрицательное";
    result += rhesus;
  }
  console.log(`${userNumber} ${result}`);
}

const firstNumber = +prompt("Введите первое число");
const secondNumber = +prompt("Введите второе число");
if (firstNumber < secondNumber) {
  for (let i = firstNumber; i <= secondNumber; i++) {
    calculateData(i);
  }
} else {
  for (let i = firstNumber; i >= secondNumber; i--) {
    calculateData(i);
  }
} */

//4 задание
/* const firstNumber = +prompt("Введите первое число");
const secondNumber = +prompt("Введите второе число");
const iterations = 7;
if (firstNumber < secondNumber) {
  for (
    let i = firstNumber;
    i < firstNumber + iterations && i <= secondNumber;
    i++
  ) {
    console.log(i);
  }
} else {
  for (
    let i = firstNumber;
    i > firstNumber - iterations && i >= secondNumber;
    i--
  ) {
    console.log(i);
  }
} */

/* function getFirstLetterWithUpper(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(getFirstLetterWithUpper("world")); */

/* function getCustomRepeat(str, num) {
  let result = "";
  let i = 0;
  while (i < num) {
    result = str + result;
    i++;
  }
  return result;
}
console.log(getCustomRepeat("hello", 5)); */
