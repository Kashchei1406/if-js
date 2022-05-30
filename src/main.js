/* eslint-disable */
import { changeColor, max, min, palindrome, sum1 } from './functionsFortest.js';
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

const hotelFilter = (str, arr) => {
  const result = arr.map((item) => `${item.country}, ${item.city}, ${item.hotel}`);

  return result.filter((item) => item.toLowerCase().includes(str.toLowerCase()));
};

console.log(hotelFilter(inputText, data));

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];
const germany = 'Germany';
const testWord2 = 'шалаш';

const palindromeInline = (str) => {
  return str === str.split('').reverse().join('');
};

const getFilteredHotels = (str, arr) => {
  return arr
    .filter((item) => Object.values(item).includes(str))
    .map((item) => Object.values(item).reverse());
};

const getSortedCountry = (arr) => {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    const { country, city } = arr[i];
    if (result[country]) {
      result[country].push(city);
    } else {
      result[country] = [city];
    }
  }

  return result;
};

console.log(palindromeInline(testWord2));
console.log(getFilteredHotels(germany, hotels));
console.log(getSortedCountry(hotels));

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  if (object1 === object2) {
    return true;
  } else {
    for (let key in object1) {
      const hasProperty = Object.prototype.hasOwnProperty.call(object2, key);
      if (!hasProperty) return false;
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        return deepEqual(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) return false;
    }
  }

  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));