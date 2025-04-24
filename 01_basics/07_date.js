// Dates


let todayDate = new Date()

console.log(typeof Date) // function
console.log(typeof Date()) // string

// console.log(todayDate);

// console.log(todayDate.toString());

// console.log(todayDate.toDateString());
// console.log(todayDate.toLocaleString());
// console.log(typeof todayDate);

// console.log(todayDate.getTime());

let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toLocaleString());
// 0 is January, 
// 1 is February, 
// 2 is March, 
// 3 is April, 
// 4 is May, 
// 5 is June, 
// 6 is July, 
// 7 is August, 
// 8 is September, 
// 9 is October, 
// 10 is November, 
// 11 is December


let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString());


console.log("---------------------------------------------------");


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 because month is 0 based index
console.log(newDate.getDay()); // 0 is Sunday, 1 is Monday, 2 is Tuesday, 3 is Wednesday, 4 is Thursday, 5 is Friday, 6 is Saturday

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})