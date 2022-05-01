let user = 'John Doe';
console.log(user);

let student = 'Andrei Kashchei';
console.log(student);

user = student;
//In variable user contains 'Andrei Kashchei'
console.log(user);

let test = 1;
test++;
test += 1;
// test = 3
console.log(test);

test--;
// test = 2;
console.log(test);

Boolean(test);
//I think in variable 'test' contains true
console.log(test);

let arr = [2, 3, 5, 8];
let sum = null;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3]
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i]>5 && arr2[i]<10){
        console.log(arr2[i]);
    }
}

for (let i = 0; i < arr2.length; i++) {
    if ((arr2[i] % 2) === 0){
        console.log(arr2[i]);
    }
}