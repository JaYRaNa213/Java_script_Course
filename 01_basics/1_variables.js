const accountId = 144553  // const is used to prevent the value from changing

let accountEmail = "jaygoogle.com" // most used


var accountPassword = "00000" // less used(not used beacuse var is not follow scope )

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountCity = "mathura" // can use

let accountstate; // can use

// accountId = 2 //not allowed beacuse we cant change the value of const variables


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


console.log(accountId);
console.log(typeof accountId);

console.log(typeof accountPassword);