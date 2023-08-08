"use strict";

/* function createListNumbers(firstUserNumber, secondUserNumber){
    const userNumbersList = []
    for(let i = 0; i < firstUserNumber; i++){
        userNumbersList.push(Math.floor(Math.random() * (secondUserNumber + 1)))
    }
    return userNumbersList
}
const firstUserNumber = +prompt("First number")
const secondUserNumber = +prompt("Second number")
console.log(createListNumbers(firstUserNumber, secondUserNumber)) */

/* function delStrFromList(arr, str){
    const totalArr = arr.filter(i => i !== str)
    return totalArr
}
const firstArray = ["sex", "drugs", "rock and roll"]
const delStr = "drugs"
console.log(delStrFromList(firstArray, delStr)) */

/* function addToArray() {
  const quantityInput = 3;
  const array = [];
  const finalArray = [];
  let count = 0;
  do {
    const userChoice = prompt("Введите что-то");
    array.push(userChoice);
    count++;
  } while (count < quantityInput);
  for (let i = 0; i < quantityInput; i++) {
    if (array[i][0] === "[") {
      const result = array[i].slice(1, -1).split(",");
      const arrInArray = [];
      for (let k = 0; k < result.length; k++) {
        arrInArray.push(changeDataType(result[k]));
      }
      finalArray.push(changeDataType(arrInArray));
    } else if (array[i][0] === "{") {
      const objToArray = array[i].slice(1, -1).split(/\,|\:/);
      const objInArray = {};
      for (let j = 0; j < objToArray.length; j += 2) {
        objInArray[objToArray[j]] = Object.fromEntries(objToArray[j + 1])
          ? changeDataType(objToArray[j + 1])
          : (objToArray[j + 1] = null);
      }
      finalArray.push(objInArray);
    } else {
      finalArray.push(changeDataType(array[i]));
    }
  }
  return finalArray;
}

function changeDataType(element) {
  const primitiveListStr = ["null", "undefined", "true", "false"];
  const primitiveList = [null, undefined, true, false];
  if (!isNaN(element)) {
    return +element;
  } else if (primitiveListStr.includes(element)) {
    return primitiveList[primitiveListStr.indexOf(element)];
  } else {
    return element;
  }
}

console.log(addToArray()); */

const arrayOfPersons = [
  {
    name: "Ferdinant",
    surname: "Foch",
    age: 54,
    nationality: "French",
    skill: "Military management",
    zodiacSign: undefined,
    height: 173,
    isAlive: false,
  },
  {
    name: "Jackson",
    surname: "Bricks",
    age: 20,
    nationality: "USA",
    skill: "farmer",
    height: 187,
    specialTrait: "mechanical arms",
    isFictionalCharacter: true,
  },
  {
    name: "Hideo",
    surname: "Kozima",
    age: 56,
    nationality: "USA",
    skill: "game developer",
    height: 173,
    specialTrait: "genius",
    actualGames: ["Death Stranding", "Metal Gear"],
    isAlive: true,
  },
  {
    name: "Kim",
    surname: "Kardashian",
    age: 39,
    nationality: "USA",
    skill: "model",
    height: 159,
    zodiacSign: "scorpio",
  },
  {
    name: "Mia",
    surname: "Khalifa",
    age: 27,
    nationality: "Lebanon",
    skill: "actress",
    height: 157,
    zodiacSign: "saggitarius",
    specialTrait: "very exspressionable",
    isAlive: true,
    isFictionalCharacter: false,
  },
  {
    name: "Herman",
    surname: "Hesse",
    age: 85,
    nationality: "Germany",
    skill: "writer",
    zodiacSign: undefined,
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["Der Steppen Wolf", "Das Glasperlenspiel"],
  },
  {
    name: "Fedor",
    surname: "Dostoevsky",
    age: 60,
    nationality: "Russia",
    skill: "writer",
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["The demons", "The Crime and Punishment", "The Idiot"],
  },
  {
    name: "Doomguy",
    surname: undefined,
    age: undefined,
    nationality: undefined,
    skill: "demon slayer",
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Angry a bit",
  },
  {
    name: "Sonic",
    surname: "The Hedgehog",
    age: 13,
    nationality: undefined,
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Fast as f#@k",
  },
  {
    name: "Bruce",
    surname: "Wayne",
    age: 12,
    isFictionalCharacter: true,
  },
  {
    name: "Ella",
    surname: "Fitzgerald",
    age: 79,
    isFictionalCharacter: false,
    isAlive: false,
    specialTrait: "Amazing voice",
    signatureSongs: [
      "Cry Me a river",
      "Hello Dolly",
      "Summertime",
      "In a sentimental mood",
    ],
  },
];

/* const nullKey = arrayOfPersons.map(elem =>{

}) */
/* function nullValue(elem) {
  return elem ? elem : null;
}

const nameSurnameAge = arrayOfPersons
  .map((item) => {
    return {
      name: nullValue(item.name),
      surname: nullValue(item.surname),
      age: nullValue(item.age),
    };
  })
  .sort(function (a, b) {
    return a.surname > b.surname ? 1 : -1;
  });
console.log(nameSurnameAge); */

/* const filterByLength = arrayOfPersons
  .filter((key) => {
    const maxLength = 8;
    if (Object.keys(key).length >= maxLength) {
      return key;
    }
  })
  .sort(function (a, b) {
    return Object.keys(a).length > Object.keys(b).length ? -1 : 1;
  });
console.log(filterByLength); */

/* const sortByAge = arrayOfPersons.sort((a, b) => {
  return a.age > b.age ? 1 : -1;
});
console.log(sortByAge);
 */
/* const presentZodiacSign = arrayOfPersons.filter((person) => {
  if (person.zodiacSign) {
    return { ...person };
  }
});
console.log(presentZodiacSign); */

/* const sortObject = arrayOfPersons.sort(item => {
    for(let i in item){
        if (typeof item[i] === "object" && item[i] !== null){
            return -1
        }
    }
})
console.log(sortObject); */

/* const getRandomId = function(item) {
  const maxNum = 1000;
  const minNum = 100;
  item.id = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  return item;
}

const addedIdInObject = arrayOfPersons.map(getRandomId)
console.log(addedIdInObject); */

/* const nullIsFictionalCharacter = function (obj) {
  if (obj.isFictionalCharacter) {
    obj.fictionalUniverse = null;
    return { ...obj };
  }
  return { ...obj };
};
const resultNullFictionalUniverse = arrayOfPersons.map(
  nullIsFictionalCharacter
);

console.log(resultNullFictionalUniverse); */