
const name = "Jay Rana"

const age = 20

console.log(`my name is ${name} and my age is ${age}`);


const Newname = new String("Jay Rana") // this is an object
console.log(typeof Newname); // object

console.log(Newname); // string

console.log(` String type is ${typeof (String)}`); // string


console.log(Newname[0]) // J
console.log(Newname[1]) // a
console.log(Newname[2]) // y
console.log(Newname[3]) // " " (space)

console.log(Newname.__proto__); // String {}
console.log(Newname.__proto__.__proto__); // Object {}


console.log(Newname.charAt(0))
console.log(Newname.charAt(1))
console.log(Newname.charAt(3))
console.log(Newname.charAt(4))

let str = "hii recruters my name is jay rana"

let strUpper= str.toUpperCase()
let strLower= str.toLowerCase()

// console.log(strUpper);
// console.log(strLower); 

let slicerStr = str.slice(0,7);//  0 to 6  : hii rec

// console.log(slicerStr); // 

// // console.log(str.indexOf(e)); // e not defined
// console.log(str.indexOf("e")); // 5
// console.log(str.indexOf("i")); // 1
// console.log(str.indexOf("i")); // 1 beacuse iteration from left to right
// console.log(str.indexOf("i", 2)); // 3 beacuse iteration from left to right


let str1 = "  kamlesh  "

let str2 = str1.trim() // remove space from start and end of the string
let str3 = str1.trimStart() // remove space from start of the string
let str4 = str1.trimEnd() // remove space from end of the string

console.log(str1)

console.log(str1.slice(0,6)) // ka
console.log(str1.slice(2,4)) // ml

console.log(str1.slice(-2 ,4)) 


let str5 = "https://hitesh.com/jay%20choudhary"

console.log(str5.replace("hitesh","kamlesh"))

console.log(str5.replace("%20","-"))

console.log(str5.includes("praveen")) // false
console.log(str5.includes("ch")) // true


console.log(str5.split('-')) // [ 'https://hitesh.com/jay', 'choudhary' ]