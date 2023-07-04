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


console.log(`${p1.firstName} ${p1.lastName} is ${p1.age} years old`);

console.log(p1.chessScores[2]);

console.log(`"${p2.firstName} ${p2.lastName}" grade in Physics is: ${p2.grades.Physics}`);

console.log((p2.grades.Biology + p2.grades.Math + p2.grades.Physics)/3);

// change object property value
p2.grades.Biology = 60;
console.log(p2.grades);

// add a new property to existing object
p2.email = 'hassan@gmail.com';
console.log(p2);