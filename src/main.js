import * as fun from './functionsFortest';

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
console.log(fun.palindrome(testWord));

console.log(fun.min(11, 20));
console.log(fun.max(10, 21));

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

console.log(fun.sum1(5)(2));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const changeColor1 = fun.changeColor(colors);
const changeColor2 = fun.changeColor(colors);
const changeColor3 = fun.changeColor(colors);

text1.addEventListener('click', changeColor1);
text2.addEventListener('click', changeColor2);
text3.addEventListener('click', changeColor3);
