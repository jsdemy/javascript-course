// js datatypes
// -----------------------
// primitive:
// string - number - boolean 
// null - undefined

let score = 85;
const val = 120;
let firstName = "Ali";
let lastName = 'Yazdi';
let isEnabled = true;
let gender = null;
let undefinedVar = undefined;
let floatNumber = 3.14;

console.log(`typeof '${score}' score=${typeof score}`)
console.log(`typeof '${val}' score=${typeof val}`)
console.log(`typeof '${firstName}' score=${typeof firstName}`)
console.log(`typeof '${lastName}' score=${typeof lastName}`)
console.log(`typeof '${isEnabled}' score=${typeof isEnabled}`)
console.log(`typeof '${gender}' score=${typeof gender}`)
console.log(`typeof '${undefinedVar}' score=${typeof undefinedVar}`)
console.log(`typeof '${floatNumber}' score=${typeof floatNumber}`)

/*
js operators
 */
console.log(12 + 56)
console.log(12 - 56)
console.log(12 * 56)
console.log(12 ** 56)
console.log(56 / 12)

let num = 25;
console.log(num)
num-- // ++
num *= 4; // += -= *= /= %=
console.log(num)

console.log(50 % 5)
console.log(13 % 2)

let fn = 'sara', ln = 'ahmadi';

const fullName = fn + ' ' + ln;
console.log(fullName);

const full_name = `${fn} ${ln}`;
console.log(full_name);


/*
js string methods
 */

let myStr = 'This is a sample JavaScript string';
console.log(myStr)
console.log(myStr.toUpperCase())
console.log(myStr.toLocaleLowerCase())
console.log(myStr[3])
console.log(myStr.substring(0,9))
console.log(myStr.substring(3,12))


/*
split string 
 */
let ss = 'This is a sample JavaScript string';
let parts = ss.split(' ')
console.log(parts)

// join
console.log(parts.join('-'))

console.log(typeof parts)

// ==============================================

/*
reference datatypes
(array - object - function)
 */
let people = ['ali', 'hassan', 'sara', 'melika']
let arr = [42.0056, 77, -96.33, null, undefined, false, 0, people]

console.log(people)
console.log(arr)

console.log(people.length)
console.log(arr.length)

console.log(people[2])
console.log(arr[2])

console.log(arr[7]) // return people array (as arr's element)

console.log(arr[7][1]) // hassan

people[5] = 'jack';

console.log(people) // ['ali', 'hassan', 'sara', 'melika', empty, 'jack']
console.log(people[4]) // undefined: because item's value is empty