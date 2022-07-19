
// 1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const str = 'ahb acb aeb aeeb adcb axeb'

console.log(str.match(/a.b/g));


// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const str2 = '2 + 3 223 2223'
let result = str2.match(/[2]\s[+]\s[3]/g);

console.log(result);

// 3. Get the day, month and year of the current date and output it to the console separately

let now = new Date();

console.log(now);
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());

