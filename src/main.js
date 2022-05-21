import {
  palindrome,
  sum1,
  max,
  min,
  changeColor,
  /* eslint-disable */
} from './functionsFortest.js';
/* eslint-disable */

let user = 'John Doe';
console.log(user);

const student = 'Andrei Kashchei';
console.log(student);

user = student;
// In variable user contains 'Andrei Kashchei'
console.log(user);

let test = 1;
test += 1;
test += '1';
// test = 21
console.log(test);

test -= 1;
// test = 20;
console.log(test);

Boolean(test);
// I think in variable 'test' contains true
console.log(test);

const arr = [2, 3, 5, 8];
let sum = null;
for (let i = 0; i < arr.length; i += 1) {
  sum += arr[i];
}
console.log(sum);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i += 1) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(`1. ${arr2[i]}`);
  }
}

for (let i = 0; i < arr2.length; i += 1) {
  if (arr2[i] % 2 === 0) {
    console.log(`2. ${arr2[i]}`);
  }
}
// !!!HomeWork-3!!!

const testWord = 'шалаш';
console.log(palindrome(testWord));

console.log(min(11, 20));
console.log(max(10, 21));

function randomArraysMaker() {
  const randomArray = [];
  for (let i = 0; i < 10; i += 1) {
    randomArray[i] = Math.floor(Math.random() * 100);
  }
  return randomArray;
}
const randomArray = randomArraysMaker();

// solved the task using the arrow function

const changedArray = randomArray.map((item) => String(item).replaceAll('0', 'zero'));

console.log(changedArray);

function zero(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 10 === 0 || array[i] === 0) {
      newArray[i] = String(array[i]).replace('0', 'zero');
    } else {
      newArray[i] = array[i];
    }
  }
  return newArray;
}
console.log(zero(randomArray));

// !!!HomeWork-4!!!
console.log(sum1(5)(2));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const changeColor1 = changeColor(colors);
const changeColor2 = changeColor(colors);
const changeColor3 = changeColor(colors);

text1.addEventListener('click', changeColor1);
text2.addEventListener('click', changeColor2);
text3.addEventListener('click', changeColor3);

function changeDate(date) {
  const dateParse = date.split(/[,.\s/-]+/);

  return `${dateParse[2]}.${dateParse[1]}.${dateParse[0]}`;
}

function changeDate1(date) {
  const newDate = new Date(Date.parse(date));
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${day}.${month}.${year}`;
}

const date = '2020-11-26';
const date1 = 'Nov-26-2020';

console.log(changeDate(date));
console.log(changeDate1(date));
console.log(changeDate1(date1));

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const inputText = 'Berlin';

const hotelFilter = (str) => {
  const result = data.map((item) => `${item.country}, ${item.city}, ${item.hotel}`);

  return result.filter((item) => item.toLowerCase().includes(str.toLowerCase()));
};

console.log(hotelFilter(inputText));
