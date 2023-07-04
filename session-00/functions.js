// Three types of functions
// ====================================
// There are 3 ways of writing a function in JavaScript:
// Function Declaration.
// Function Expression.
// Arrow Function.

// Function Declaration
// A basic javascript function, here we create a function that divides the 1st element by the second element.
function myFunction(){
    console.log('i am myFunction');
}

// call myFunction() function
myFunction();

function welcome(name){
    console.log(`Welcome ${name}`);
}

welcome('Mir Hassan Moosavi');

function calculator(x, y, operator){
    let result = '';
    switch (operator) {
        case '+':
            result = `${x} + ${y} = ${x + y}`;
            break;
        case '+':
            result = `${x} + ${y} = ${x + y}`;
            break;
        case '*':
            result = `${x} * ${y} = ${x * y}`;
            break;
        case '/':
            result = `${x} / ${y} = ${x / y}`;
            break;
        case '%':
            result = `${x} % ${y} = ${x % y}`;
            break;
        case '**':
            result = `${x} ** ${y} = ${x ** y}`;
            break;
        default:
            result = 'unknown operator';
            break;
    }
    return result;
}

console.log(calculator(5, -3, '+'))
console.log(calculator(5, -3, '-'))
console.log(calculator(5, -3, '*'))
console.log(calculator(5, -3, '**'))
console.log(calculator(5, -3, '/'))
console.log(calculator(5, -3, '%'))

// Arrow Function

const myFunc = (firstName, lastName)=>{
    return `Hello ${firstName} ${lastName}`;
}

console.log(myFunc('sanaz', 'bahrami'));


// Function Expression (anonymous or named)
// Example 01: Function Expression (anonymous)
let f1 = function(x, y) {
    return x + y;
}

console.log(f1(12, 48));


// Example 02: Function Expression (named)
let f2 = function multiply(x, y) {
    return x * y;
}

console.log(f2(120, 48));



/* 3 ways of writing a function in JavaScript: */
// ==============================================
// Syntax for Function Declaration:
// function functionName(x, y) { statements... return (z) };

// Syntax for Function Expression (anonymous):
// let variableName = function(x, y) { statements... return (z) };

// Syntax for Function Expression (named): 
// let variableName = function functionName(x, y) 
// { statements... return (z) };

// Syntax for Arrow Function:
// Arrow functions{()=>} are a clear and concise method of writing normal/regular Javascript functions in a more accurate and shorter way. Arrow functions were introduced in the ES6 version. They make our code more structured and readable.
// Arrow functions are anonymous functions i.e. they are functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.
