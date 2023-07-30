"use strict";
//1 задание
/* function reduceStr(str) {
  const maxLength = 30;
  let res = "";
  for (let i = 0; i < maxLength; i++) {
    res += str[i];
  }
  if (res.length === maxLength) {
    res += "...";
    return res;
  } else {
    return res;
  }
}

const str = "But you have no right to call me a murderer";
console.log(reduceStr(str)); */

//2 задание
/* function reverseRegister(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str[i]) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  console.log(result);
}
const str = "Be my Valentine'";
console.log(reverseRegister(str)); */

//3 задание
/* function dataCount(str) {
  const allSymbols = str.length;
  const splitStr = str.split(" ");
  const quantityOfWords = splitStr.length;
  const sentenceType = [
    "Повествовательное",
    "Восклицательное",
    "Вопросительное",
  ];
  const symbols = [".", "!", "?"];
  let symbolsWithoutSpaces = 0;
  let type = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      symbolsWithoutSpaces += 1;
    }
  }

  for (let k = 0; k < symbols.length; k++) {
    if (str[str.length - 1] === symbols[k]) {
      type = sentenceType[k];
      break;
    } else {
      type = null;
    }
  }
  const result = `{\n\tКоличество всех символов: ${allSymbols}
    Количество символов без пробелов: ${symbolsWithoutSpaces}
    Количество слов в предложении: ${quantityOfWords}
    Тип предложения : ${type}\n}`;
  return result;
}
console.log(dataCount("Дима Внук, приветствую, проверка работы функции!")); */

//4 задание
/* function censorshipCheck(str) {
  const bannedWord = "rabbit";
  const listWorlds = str.split(" ");
  let res = "";
  for (let i = 0; i < listWorlds.length; i++) {
    if (listWorlds[i].toLowerCase() === bannedWord.toLowerCase()) {
      listWorlds[i] = "*".repeat(listWorlds[i].length);
    }
  }
  res = listWorlds.join(" ");
  return res;
}
console.log(censorshipCheck("Follow the white RabbiT")); */
