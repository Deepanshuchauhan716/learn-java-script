// Part 1: Variable Kya Hai? (Basic Definition)
// Variable ek naam hai jo memory location ko point karta hai, jahan value store hoti hai.

// Simple analogy:

// Variable = Dabba (box) ka label

// Value = Dabbe ke andar rakhi cheez

// Memory = Godown jahan saare dabbe rakhe hain

let name = "Rahul";

// Yahan:

// name = label

// "Rahul" = value

// Memory mein ek jagah reserve hui jahan "Rahul" store hua


// Part 2: JavaScript Engine Ke Andar Kya Hota Hai?
// Jab aap code likhte ho, toh V8 Engine (Chrome/Node.js) ke andar yeh steps hote hain:

// text
// Code (text) 
//    ↓
// Parser (tokens mein todta hai)
//    ↓
// AST (Abstract Syntax Tree)
//    ↓
// Interpreter (Ignition) → Bytecode
//    ↓
// JIT Compiler (TurboFan) → Machine Code

// Parsing (Code Padhna)
// Jab aap let name = "rahul" likhte hain, engine pehle ise tokens me todta hai:

// text
// let    name    =    "rahul"    ;
//  ↓      ↓      ↓      ↓        ↓
// Keyword Identifier Operator String Semicolon


// Phir in tokens ka ek AST (Abstract Syntax Tree) banata hai:

// text
// VariableDeclaration (let)
//     └── VariableDeclarator
//             ├── id: Identifier (name)
//             └── init: Literal ("rahul")
// Yani engine samajh jaata hai: "Ye ek variable declaration hai, jiska naam name hai, aur value "rahul" hai."

// Step 2: Execution Context Banana
// Engine ek Execution Context banata hai. Isme hota hai:

// Variable Environment (jaha variables store hote hain)

// Lexical Environment

// Execution Context Kya Hai? (Simple Definition)

// Execution Context ek environment hai jisme JavaScript code execute hota hai. Isme wo saari information hoti hai jo code ko run karne ke liye chahiye:

// Kaunse variables available hain

// Unki values kya hain

// this kis cheez ko point kar raha hai

// Outer scope ka access hai ya nahi

// Analogy: Jaise ek chef ko cooking ke liye ek kitchen chahiye — jisme ingredients, utensils, aur recipe ho. Waise hi code ko run hone ke liye Execution Context chahiye — jisme variables, functions, aur this ho.

// Type 1: Global Execution Context
// Kab banta hai? Jab aapki script sabse pehle start hoti hai.

// Kitne bante hain? Sirf 1 — poore program me.

// Kya hota hai isme?

// Jo bhi code aapne file me top-level pe likha (function ke bahar), wo isme aata hai

// this = window (browser me)

// Ye sab Global Execution Context me hai
let name = "deepanshu";
let age = 25;

console.log("Hello");

// Yaha name, age, aur console.log — sab Global Context ke andar chal rahe hain.

// Analogy: Jaise aapke ghar ka main hall — jaha sab log aate hain, sab kaam yahi se shuru hota

// Type 2: Function Execution Context
// Kab banta hai? Jab bhi koi function call hota hai.

// Kitne bante hain? Jitni baar function call karo, utne baar naya banta hai.

// Kya hota hai isme?

// Function ke andar ke variables

// Function ka apna this

// Example:

// js
let name = "rahul";  // Global context

function greet() {
  let message = "Hello";  // Ye Function context me hai
  console.log(message);
}

greet();  // ← Yaha naya Function Execution Context bana
greet();  // ← Phir se naya bana
// Dhyaan do:

// name → Global Context me

// message → Function Context me (sirf greet() ke andar available)

// Har greet() call pe naya dabba banta hai

// Analogy: Jaise aap kitchen me jaate ho kaam karne. Har baar kitchen me jaao, ek naya "kaam ka context" ban jaata hai. Kaam khatam → kitchen se bahar → context khatam.

// three type of variable 
// var let const


// 1️⃣ var — Sabse Purana

var name = "rahul";
var age = 25;
var city = "delhi";

// Problem kya hai?
// 1. Value dobara declare kar sakte ho (bina error):

// js
var name = "rahul";
var name = "rohan";   // ❌ koi error nahi!
console.log(name);    // "rohan"
// Ye galti hai. Ek hi naam ka variable dobara ban gaya. Pata bhi nahi chala.

// 2. Block ke bahar bhi chalta hai:

// js
if (true) {
  var x = 10;
}
console.log(x);   // 10 ✅ (bahar bhi dikha!)
// Ye galat hai. x sirf if ke andar hona chahiye tha, lekin bahar bhi dikh raha hai.

// 3. Hoisting ki problem:

// js
console.log(name);   // undefined (error nahi!)
var name = "rahul";
// Value assign hone se pehle bhi name use ho gaya. Output undefined aaya.


// 2️⃣ let — Value Badalne Ke Liye
// Kaise likhte hain?
// js

let name = "rahul";
let age = 25;
let city = "delhi";

// Kya khaas baat hai?
// 2015 me aaya (ES6)

// Block ke andar kaam karta hai (block scope)

// Value badal sakte ho

// Dobara declare nahi kar sakte (error aayega)

// Kaise kaam karta hai?
// 1. Value badal sakte ho:

// js
let age = 25;
age = 26;        // ✅ chalega
age = 27;        // ✅ chalega
console.log(age);  // 27
// 2. Dobara declare nahi kar sakte:

// js
let name = "rahul";
let name = "rohan";   // ❌ SyntaxError!
// 3. Block ke andar hi rehta hai:

// js
if (true) {
  let x = 10;
  console.log(x);   // 10 ✅
}
console.log(x);     // ❌ ReferenceError!
// x sirf if ke andar zinda hai. Bahar nahi.

// 4. Hoisting nahi hoti (TDZ):

// js
console.log(name);   // ❌ ReferenceError!
let name = "rahul";
// Value assign hone se pehle use nahi kar sakte. Ise TDZ (Temporal Dead Zone) kehte hain.

// 3️⃣ const — Value Na Badalne Ke Liye
// Kaise likhte hain?
// js
const pi = 3.14;
const country = "India";
const birthYear = 1995;
// Kya khaas baat hai?
// 2015 me aaya (ES6)

// Block ke andar kaam karta hai (block scope)

// Value nahi badal sakte (fixed)

// Dobara declare nahi kar sakte

// Banate waqt value deni padti hai

// Kaise kaam karta hai?
// 1. Value nahi badal sakte:

js
const pi = 3.14;
pi = 3.15;   // ❌ TypeError!
// 2. Banate waqt value deni padti hai:

js
const name;        // ❌ SyntaxError!
const name = "rahul";  // ✅ theek hai
// 3. Dobara declare nahi kar sakte:

js
const name = "rahul";
const name = "rohan";   // ❌ SyntaxError!
// 4. Block ke andar hi rehta hai:

js
if (true) {
  const x = 10;
  console.log(x);   // 10 ✅
}
console.log(x);     // ❌ ReferenceError!