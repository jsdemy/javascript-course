// object oriented programming

class Person {
    constructor(fn, ln, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello ${this.firstName} ${this.lastName} is ${this.age} years old`)
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }
}


// create an insatnce (an object)
let p1 = new Person('Ali', "Yazdi", 33);
p1.sayHello()

let full = p1.getFullName();
console.log(full);

let age = p1.getAge()
console.log(age)