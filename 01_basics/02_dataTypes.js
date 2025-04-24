"use strict";

// alert (3+3);  // alert is used to show the output in pop up window . it is not used in console or terminal


// there are mostly 7 data types in js

// 1. string = "hello world" or 'hello world' or `hello world`
// 2. number = 333
// 3. boolean = true or false
// 4. null = null // null is a special value that represents the absence of any value or object. It is often used to indicate that a variable has been intentionally set to have no value or that an object does not exist. In JavaScript, null is a primitive value and is treated as an object type. It is important to note that null is different from undefined, which indicates that a variable has been declared but has not yet been assigned a value.
//    In JavaScript, null is a falsy value, meaning it evaluates to false in a boolean context. It is often used in conditional statements to check if a variable has been intentionally set to no value. For example:


// 5. undefined = undefined // undefined is a primitive value in JavaScript that indicates that a variable has been declared but has not yet been assigned a value. It is the default value of uninitialized variables and is also the return value of functions that do not explicitly return a value. In JavaScript, undefined is a falsy value, meaning it evaluates to false in a boolean context. It is important to note that undefined is different from null, which represents the intentional absence of any value or object.

// 6. symbol => unique identifier for objects
// 7. BigInt


let name= "jay"

let age = 33

let isLoggedIn = false

let state;


// object

// console.log(typeof undefined);

console.log(typeof null); // null is an object in js. it is a bug in js. but we can use it as an object.