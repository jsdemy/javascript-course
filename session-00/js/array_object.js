// an array contains objects
const lessons = [
    {id: 1, name: 'math', isEnable: true},
    {id: 2, name: 'chemistry', isEnable: false},
    {id: 3, name: 'biology', isEnable: true},
];

console.log(lessons)

console.log(lessons[0])
console.log(lessons[1])

console.log(lessons[0].id)
console.log(lessons[0].name)
console.log(lessons[0].isEnable)


// array object to json object

const jsonObj = JSON.stringify(lessons);
console.log(jsonObj)