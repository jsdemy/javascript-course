// forEach - map - filter
// output of these methods is a new array

// courses is an array object
const courses = [
    { id: 1, courseName: "math", duration: 45, isAvailable: true },
    { id: 2, courseName: "chemistry", duration: 35, isAvailable: false },
    { id: 3, courseName: "physics", duration: 65, isAvailable: false },
    { id: 4, courseName: "biology", duration: 78, isAvailable: true }
];


// forEach() is look like for..of loop
courses.forEach(function (item) {
    let cn = item.courseName
    let cd = item.duration
    let ca = item.isAvailable

    console.log(`'${cn}' course in '${cd}' hours is '${ca ? 'available' : 'unavailable'}'`)
})

console.log('---------------------')
// callback function is an arrow function
courses.forEach((item) => {
    let cn = item.courseName
    let cd = item.duration
    let ca = item.isAvailable

    console.log(`'${cn}' course in '${cd}' hours is '${ca ? 'available' : 'unavailable'}'`)
})

// map()