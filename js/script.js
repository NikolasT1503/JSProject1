"use strict";

let number = 4;
let n = 4.6;

console.log(4/0);
console.log('str' * 9);

const persone = "Alex";

const flaf = true;

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.age);

let arr = ['Alex', 'John', 7, 'Ivan', {1: []}, []];
console.log(arr[4]);

// alert('Hello');

// const result = confirm("are you here");

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько лет?', '');

console.log(typeof(answers));