"use strict"
// 1.  In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'

try {
    console.log(a);
    let a = 3;
}catch (err){
    console.log(err.message);
}
// I'm can't understand what does ‘let must be declared’ - mean. Could I have explained this task in different words?




function division (a, b) {
    return a / b;
}


try {
    let result = division (1, 0);
    if (result === Infinity) {
        throw new SyntaxError ('cannot be divided by zero');
    }else {
        console.log(result);
    }
}catch (err) {
    console.log(err.message);
}finally {
    console.log("Code was executed");
}