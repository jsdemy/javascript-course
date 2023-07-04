// two types of functions
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