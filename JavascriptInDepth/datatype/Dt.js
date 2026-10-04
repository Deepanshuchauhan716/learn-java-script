
// Part 1: Data Type Kya Hota Hai?
// Data Type = Yeh batata hai ki variable ke andar kis tarah ki value store hai, aur us value ke saath kaunse operations kiye ja sakte hain.

// Simple analogy:

// Dabba = Variable

// Dabbe ke andar ki cheez = Value

// Cheez ka type = Data Type (kya woh fal hai, sabzi hai, ya kapda hai?)

let name = "Rahul";     // string type
let age = 25;           // number type
let isStudent = true;   // boolean type
let hobbies = ["coding", "reading"]; // object type (array)


// Kyun zaroori hai?

// Engine ko pata chale ki memory mein kitni jagah allocate karni hai

// Kaunse operations allowed hain (+ number pe kaam karega, string pe concat karega)

// Type dynamically decide hota hai (JavaScript dynamically-typed hai)


// Part 2: JavaScript Ke 8 Data Types
// JavaScript mein 8 data types hain:

// Primitive Types (7) — Stack mein store, immutable
// string — Text

// number — Numbers (integer + float)

// boolean — true / false

// null — Intentional empty value

// undefined — Value assign nahi hui

// symbol — Unique identifier (ES6)

// bigint — Bade numbers (ES2020)

// Reference Type (1) — Heap mein store, mutable
// object — Arrays, functions, dates, sab object hain

// Part 3: Primitive Types (Detail Mein)
// 1. string — Text
// js


let name = "Rahul";
let message = 'Hello';
let template = `Hi ${name}`; // Template literal


// Internally:

// Immutable — ek baar bana, change nahi ho sakta

// Stack mein store hota hai

// UTF-16 encoding use karta hai

js
let str = "hello";
str[0] = "H"; // ❌ Kaam nahi karega (immutable)
console.log(str); // "hello"


// 2. number — Numbers
// js


let age = 25;
let price = 99.99;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;

// Internally:

// 64-bit floating point (IEEE 754 standard)

// Integer aur float mein koi difference nahi

// SMI (Small Integer) ke liye V8 special optimization karta hai

js
console.log(0.1 + 0.2); // 0.30000000000000004 (floating point issue)
console.log(1 / 0);     // Infinity
console.log(0 / 0);     // NaN
// Important:

// NaN (Not a Number) bhi ek number type hai

// typeof NaN → "number"

// NaN === NaN → false (unique)

// 3. boolean — True/False
// js

let isLoggedIn = true;
let isAdmin = false;

// Internally:

// Sirf 2 values: true ya false

// Stack mein store hota hai

// Conditions mein use hota hai

// Truthy vs Falsy:

// js
// Falsy values (7)

// false, 0, -0, 0n, "", null, undefined, NaN

// Baaki sab truthy hain
// "hello", 1, [], {}, function() {}


// 4. null — Intentional Empty
// js
let data = null;
// Internally:

// Deliberately empty value assign ki

// typeof null → "object" (famous bug)

// Stack mein store hota hai

// Kyun typeof null object hai?

// 1995 mein JS banaya gaya, tab values ko type tag ke saath store kiya jata tha

// null ka tag 000 tha, jo object ke tag se match ho gaya

// Ab fix karna impossible hai (bahut code depend karta hai)

// 5. undefined — Value Assign Nahi Hui
// js

let x;
console.log(x); // undefined

function foo() {} // return undefined
console.log(foo()); // undefined

let obj = {};
console.log(obj.name); // undefined (property exist nahi karti)
// Internally:

// JS engine automatically deta hai jab value assign nahi hoti

// Stack mein store hota hai

// typeof undefined → "undefined"

// null vs undefined:

// null	undefined
// Developer assign karta hai	JS engine deta hai
// "Empty" value	"Missing" value
// typeof null → "object"	typeof undefined → "undefined"
// null == undefined → true	null === undefined → false


// 6. symbol — Unique Identifier (ES6)
// js

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false (har symbol unique hai)
// Internally:

// Har Symbol() call unique value banata hai

// Object properties ke liye use hota hai (hidden properties)

// Stack mein store hota hai

// Use case:

// js
const ID = Symbol("id");
const user = {
  name: "Rahul",
  [ID]: 123 // symbol property
};
console.log(user[ID]); // 123

// 7. bigint — Bade Numbers (ES2020)
// js
let big = 9007199254740991n; // 'n' suffix
let bigger = 123456789012345678901234567890n;
Internally:

// Number type ki limit: 2^53 - 1

// BigInt isse bade numbers handle karta hai

// Heap mein store hota hai

// Stack mein reference store hota hai

// js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(9007199254740992);        // 9007199254740992 (galat?)
console.log(9007199254740993);        // 9007199254740992 (precision loss)
console.log(9007199254740993n);       // 9007199254740993n (correct)


// Part 4: Reference Type (Object)
// 8. object — Sab Kuch Object Hai
// js
let person = { name: "Rahul", age: 25 };
let arr = [1, 2, 3];
let fn = function() {};
let date = new Date();
// Internally:

// Heap mein store hota hai

// Stack mein sirf reference (address) store hota hai

// Mutable — change ho sakta hai

// typeof object → "object"

// typeof array → "object" (array bhi object hai)

// typeof function → "function" (special case)

// Part 5: Memory Mein Kaise Store Hote Hain?
// Stack vs Heap
// js

let num = 42;              // Stack
let str = "hello";         // Stack
let obj = { a: 1 };        // Heap (Stack mein reference)
let arr = [1, 2, 3];       // Heap (Stack mein reference)