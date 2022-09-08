"use strict"
// Create a car object, add a color property to it with the value equals 'black'

let car = {
    color: "black"
}

// Change the color property of the car object to 'green'

car.color = "green";

// Add the power property to the car object, which is a function and displays the engine power to the console

car.power = function showMotorProperties () {
    console.log("275 hp");
}

console.log(car);

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

let pearsBalance = 0
let applesBalance = 0

function showSum (pears, apples) {
    pearsBalance += pears;
    applesBalance += apples;
    return pearsBalance, applesBalance;
}
showSum(1, 5);
showSum(3, 6);
console.log(pearsBalance);
console.log(applesBalance);

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

let userName = "Mamuka";

function defineName (name) {
    if (name === userName) {
        console.log("Hello " + name);
    }
    else {
        console.log("There is no such name");
    }
}
defineName ("Mamuka");
defineName ("John");

// Write a function for calculating the type of argument and type output to the console

function typeOfArgument (argument) {
    console.log(typeof argument);
}

typeOfArgument (5);
typeOfArgument (true);
typeOfArgument ("Hi!");

// Write a function that determines whether a number is prime or not

function checkPrime (number) {
    if (number > 1) {
        let i;
        for (i=2; i < number; i++) {
            if (number % i === 0) {
                return "This number is not prime";
            }
        }
        return "This number is prime";
    } else {
        return "This number is not prime";
    }
}

console.log(checkPrime(7));
console.log(checkPrime(9));
console.log(checkPrime(1));
console.log(checkPrime(0));
console.log(checkPrime(2));