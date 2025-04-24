

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt



// Reference (Non primitive)

// Array, Objects, Functions, Date, RegExp, Map, Set, WeakMap, WeakSet

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);// false
console.log(id === anotherId); // false
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol

// const bigNumber = 3456543576654356754n



// array

const heros = ["shaktiman", "naagraj", "doga"];

// object
let myObj = {
    name: "hitesh",
    age: 22,
}

// function
const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3