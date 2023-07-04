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