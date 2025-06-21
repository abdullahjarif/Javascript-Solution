// arithmetic operators => +, -, *, /, %, ++, --
// assignment operators => =, +=, -=, *=, /=, %=
// comparison operators => ==, ===, !=, !==, <, >, <=, >=, ?
// logical operators => &&, ||, !

// arithmetic operators
let resultSum = 20 + 30
console.log(resultSum);

let resultSub = 30 - 20
console.log(resultSub);

let resultMul = 20 * 30
console.log(resultMul);

let resultDiv = 40 / 2
console.log(resultDiv);

let resultPow = 2**3
console.log(resultPow);

// example of assignment opertor --> when assign a value 
let x = 10
let y = 20
let resultAssign = x += y // x = x + y
console.log(resultAssign);

let resultAssignSub = x -= y // x = x - y
console.log(resultAssignSub);

let resultAssignMul = x *= y // x = x * y
console.log(resultAssignMul);

let resultAssignDiv = y /= x // y = y / x
console.log(resultAssignDiv);


let x1 = 10
let y1 = 20

let result1 = x1 += y1
console.log(result1); // show total value 
console.log(x1); // show x1 = x1 + y1 value 
console.log(y1); // show y1 value 

// Comparison Operator --> when compare two value 

let a = 20
let b = 30
console.log(a == b) // false
console.log(a != b) // true
console.log(a > b) // false
console.log(a < b) // true

// === type check datatype + value 
// == only check value
let a1 = 20
let b1 = "20"
console.log(a1 === b1)
console.log(a1 != b1) // check value 
console.log(a1 !== b1) // check only value + datatype
console.log(a1 < b1) 
console.log(a1 > b1) 
console.log(a1 >= b1) 
console.log(a1 <= b1) 

// logical operator 
let p = 20
let q = 30

let resultAnd = p && q
console.log(resultAnd)

let resultOr = p || q
console.log(resultOr)

let resultNot = !q
console.log(resultNot)




