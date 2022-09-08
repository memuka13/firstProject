// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

const movieLibrary = ["Avengers", "Avengers 2", "Capitan America", "Spider-man", "Thor", "Doctor Strange"];

movieLibrary.forEach(movie => console.log(movie));

// 2. Given an array of car manufacturers, convert the array to a string and back to an array

const carManufacturers = ["Toyota", "Nissan", "BMW", "JEEP", "Land Rover"];

const strManufacturers = carManufacturers.toString();

console.log(strManufacturers);

const newArray = strManufacturers.split (",");

console.log(newArray);

// 3. Given an array of the names of your friends, add the words hello to each element of the array

const myFriends = ["George", "Revazi", "Aleksandre", "Beka"];

const helloFriends = myFriends.map(name => `Hello ${name}`);

console.log(helloFriends);

// 4. Convert numeric array to Boolean

const numArray = [1, 56, 8, 0, -1, -36];

const booleanArray = numArray.map(item => Boolean(item));

console.log(booleanArray);

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order

const array5 = [1,6,7,8,3,4,5,6];

console.log(array5.sort((a,b) => b - a));

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3

const array6 = [1,6,7,8,3,4,5,6];

const graterThen3 = array6.filter(a => a >3);

console.log(graterThen3);

// 7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

const array7 = array6;

function numberIndex (number, arr) {
    return arr.findIndex((num) => num === number);
}

console.log(numberIndex(7, array7));
console.log(numberIndex(1, array7));
console.log(numberIndex(20, array7));

// 8. Implement a loop that will print the number 'a' until it is less than 10

let a = 0;
while (a < 10) {
    console.log(a);
    a++;
}


// 9. Implement a loop that prints prime numbers to the console

// This function prints prime numbers that are <= given parameter.

function primeNumbers (number) {
    let num = 2;
    while (num <= number) {
        let i;
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                break;
            }
        }
        if (i === num) {
            console.log(num);
        }
        num++;
    }
}

primeNumbers(113);
primeNumbers(-1);

// 10. Implement a loop that prints odd numbers to the console

function oddNumbers (number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

oddNumbers(99);
oddNumbers(14);

