// if, if..else
let n1 = 5;
let v = 'this is sample';

if (v.length > n1) {
    console.log('yes')
}

if (n1 == v.length) {
    console.log(`n1 == "${v}".length`)
} else {
    console.log(`n1=${n1} != "${v}".length`)
}


// switch case 
function calculator(x, y, operator) {
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

// loops
// for loop
console.log('--------for loop--------')
for (let i = 0; i <= 10; i++) {
    console.log(i)
}



//while loop
console.log('--------while loop--------')
i = 13; // sentinal value
while (i <= 20) {
    console.log(i)
    i++;
}

// for..of
console.log('--------for..of--------')
let courses = ['math', 'physics', 'biology'];
for (const item of courses) {
    console.log(item)
}

// iterating index and value of earch item
console.log('----index and value----')
for (let [index, value] of courses.entries()) {
    console.log(index, value)
}


// for..in
console.log('--------for..in--------')
for (const item in courses) {
    console.log(item)
}

console.log('--------for..in--------')
console.log('iterating property of object')
const student = {
    id: 1205,
    first_name: "Ali",
    last_name: "Yazdi",
    age: 33
}
for (let prop in student) {
    console.log(prop, student[prop])
}


