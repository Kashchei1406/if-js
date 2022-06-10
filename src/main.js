/* eslint-disable */
import { changeColor, max, min, palindrome, sum1 } from './functionsFortest.js';
import { hotels, studentsData, data } from './arrays.js';
/* eslint-enable */

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

const testArr = [2, 3, 5, 8];
let sum = null;
for (let i = 0; i < testArr.length; i += 1) {
  sum += testArr[i];
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

const inputText = 'Berlin';

const hotelFilter = (str, arrHotel) => {
  const result = arrHotel.map((item) => `${item.country}, ${item.city}, ${item.hotel}`);

  return result.filter((item) => item.toLowerCase().includes(str.toLowerCase()));
};

console.log(hotelFilter(inputText, data));

const germany = 'Germany';
const testWord2 = 'шалаш';

const palindromeInline = (str) => str === str.split('').reverse().join('');

const getFilteredHotels = (str, arrHotels) => arrHotels
  .filter((item) => Object.values(item).includes(str))
  .map((item) => Object.values(item).reverse());

const getSortedCountry = (array) => {
  const result = {};
  for (let i = 0; i < array.length; i += 1) {
    const { country, city } = array[i];
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
  }

  for (const key in object1) {
    const property = Object.prototype.hasOwnProperty.call(object2, key);
    if (!property) return false;
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      return deepEqual(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) return false;
  }

  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(students) {
    this.students = Students.creatorStudents(students);
  }

  static creatorStudents(arr) {
    const students = [];
    for (let i = 0; i < arr.length; i += 1) {
      const {
        firstName, lastName, admissionYear, courseName,
      } = arr[i];
      students.push(new Student(firstName, lastName, admissionYear, courseName));
    }

    return students;
  }

  get getInfo() {
    return this.students
      .sort((a, b) => a.course - b.course)
      .map((item) => `${item.fullName} - ${item.courseName}, ${item.course} курс`);
  }
}

const students = new Students(studentsData);
console.log(students.getInfo);
console.log(typeof typeof null);
