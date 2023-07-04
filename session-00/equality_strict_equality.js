const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

function add(x = 1, y = 2) {
    console.log(x + y)
}

// add(y = 10, x = 25);

// add();

// add(y = 55, x = 3);

add(y = 5) // wow ~>  7
