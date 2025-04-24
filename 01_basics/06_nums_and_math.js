
const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3)); // 1000.000
console.log(balance.toFixed(2)); // 1000.00
console.log(balance.toFixed(1)); // 1000.0


const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));//124
console.log(otherNumber.toPrecision(4));//123.9
console.log(otherNumber.toPrecision(5));//123.90

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

console.log("+++++++++++++ Maths +++++++++++++++++++++++++++++");

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(3.9));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
let randomNumber = Math.random()

console.log(randomNumber); // 0.123456789
console.log(Math.floor(randomNumber* (max - min + 1)) + min)