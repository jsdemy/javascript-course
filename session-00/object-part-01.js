// oop in js

const car = { type: "Fiat", model: "500", color: "white" };
console.log(car)

console.log('===========================')

const p1 = {
    firstName: 'ali', lastName: 'yazdi', age: 34,
    chessScores: [45, 65, 88]
};

const p2 = {
    firstName: 'hassan', lastName: 'moosavi', age: 33,
    grades: {
        'Math': 88,
        'Physics': 95,
        'Biology': 73
    }
};


console.log(`${p1.firstName} ${p1.lastName} is ${p1.age} years old`)

console.log(p1.chessScors[2])

console.log(`"${p2.firstName} ${p2.lastName}" grade in Physics is: ${p2.grades.Physics}`)