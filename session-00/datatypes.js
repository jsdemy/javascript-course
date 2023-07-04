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


