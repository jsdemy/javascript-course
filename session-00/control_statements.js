// if, if..else
let n1 = 5;
let v = 'this is sample';

if(v.length > n1){
    console.log('yes')
}

if (n1 == v.length) {
    console.log(`n1 == "${v}".length`)
} else {
    console.log(`n1=${n1} != "${v}".length`)
}


// switch case 
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

// loop
// for:
for(let i = 0; i <= 10; i++){
    console.log(i)
}


