"use strict"

let myString = "str"
let myBoolean = true
let myNumber = 123

// 1. Perform addition of various types (string + boolean, string + number, number + boolean)

console.log(myString + myBoolean);
console.log(myString + myNumber);
console.log(myNumber + myBoolean);

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)

console.log(myString * myBoolean);
console.log(myString * myNumber);
console.log(myNumber * myBoolean);

// 3. Divide different types (string / boolean, string / number, number / Boolean)

console.log(myString / myBoolean);
console.log(myString / myNumber);
console.log(myNumber / myBoolean);

// 4. Perform explicit conversion (number, string, boolean)

console.log(String(myNumber));
console.log(String(myBoolean));
console.log(Number(myString));
console.log(Number(myBoolean));
console.log(Boolean(myString));
console.log(Boolean(myNumber));