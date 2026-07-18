// operator ek special symbol hota hai joo value ya variable par operation karta hai

// EXAMPLE

let a = 10;
let b = 20;

let sum = a + b // + , = is the operator here .

// TYPES OF OPERATOR IN JAVA SCRIPT 
// 1 => arithmatic operator

let a = 10;
let b = 20;

console.log(a + b); //addition operator
console.log(a - b); //subtraction operator
console.log(a * b); // multiply operator
console.log(a / b); // devide operator
console.log(a % b); // modulo operator
console.log(a ** b); // power operator

// 2 => assignment operator  value ko assign krne ke liye 

let x = 10;
x += 5
x -= 3
x *= 2
x /= 4
x %= 1


// 3 => comparision operator 2 ya more value ko compare krne ke liye

let a = 10;
let b = 20
 
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a != b)
console.log(a === b)
console.log(a !== b)

// 4 => logical operator condition ko combine krte hai

let age = 20;
let hasId = true;
console.log(age >= 18 && hasId) ;

// 3 type ke logical operator hote hai AND(&&), OR(||) , NOT(!)


// 5 => increment and decrement operator

let a = 5; // INCREMENT
a++;
console.log(a); // 6

let b = 5; // DECREMENT 
a--;
console.log(a); // 4

// 6 => string operator

let first = "deepa";
let last = "anshu";
console.log(first + last); //deepanshu

// 7 => turnary operator(like if-else)

let age = 20;
let result = age >= 18 ? "adult" : "minor";
console.log(result);

// 8 => nullish coalescing operator
//default value dene ke liye use hota hai jab value null ya undefind ho

let name = null;
console.log(name ?? "guest");

// 9 => optional chaining operator
//nested object me safely property access krne ke liye 

let user = {};
console.log(user.address?.city);

// 10 => type operator
// kisi cheez ke type jaanne ke liye typeof ka use hota hai

let a  = 10;
console.log(typeof a) // number 

// 11 => bitwise operator
//ye operator (0 and 1 ) level par kaam krta hain

//&
//|
//^
//-
//<<
//>>
//>>>

