// Function Kya Hai? — Ek Line Me
// Function = code ka ek dabba, jise ek naam diya jaata hai, aur jab chahiye tab chala sakte ho.

// Matlab: ek baar likho, baar-baar use karo.

// Pehle Ek Situation Socho
// Tumhe 3 baar "Hello" print karna hai:

// Bina function:

// js
console.log("Hello");
console.log("Hello");
console.log("Hello");

// Agar 100 baar chahiye? 100 baar likhna padega.

// function ke saath

function greet() {
  console.log("Hello");
}

greet();   // Hello
greet();   // Hello
greet();   // Hello

// Function Kaise Banate Hain?
// Syntax:

// js

// function functionName() {
  // code yaha likho
// }

// Tod ke dekho:

// Part	Matlab
// function	Keyword (batata hai ki ye function hai)
// functionName	Function ka naam (tum kuch bhi rakh sakte ho)
// ()	Parameters (input lene ke liye)
// {}	Code block (andar kaam)

// Ab Detail Me — Function Ke 4 Parts

// 1️⃣ Function Declaration (Function Banana)

function hello(){
    console.log("Hello");
}

// abhi sirf declare kiya hai

// 2️⃣ Function Call (Function Chalana)

hello() // ye function call hai function ka code execute krne ke  lie

// 3️⃣ Parameters (Input Lena)

function para(name){
    console.log(name);
}

// name ek parameter hai — function ke andar input lene ke liye.
para("deepanshu");// deepanshu ek argument hai 
para("mohit");//mohit ek argument hai

// 4️⃣ Return (Output Dena)
function ret(name){
    return name; // return keyword ne name return kiya iska mtkb jisne function ko call kiya tha use value return krdo
}

let name = ret("Priya"); //FUNCTION EXPRESSION jab bhi koi value return hoti hai to use kisi variable me store krna hota hai
console.log(name); // ab jo variable bnaaya hai usko console krdo

// Ab 5 Tarah Se Function Bana Sakte Ho
// JavaScript me function banane ke 5 tarike hain:

// 1.~~~~~~~~~~~~ Function Declaration (Sabse Common)
// js
function greet() {
  console.log("Hello");
}
greet();
// Khaas baat: Hoisting hoti hai — pehle call kar sakte ho, baad me define karo.

world() // first call then create function
function world(){
    console.log("World");
}

// Function Declaration Ka Hoisting
// Yeh sabse important part hai.

// Function Declaration POORA hoisted hota hai.

// Matlab: Function ko declare karne se pehle bhi call kar sakte ho.

// Function Declaration Ke Examples
// Example 1: Simple Function

function Sayhi(){
    console.log("hi bro how are you !")
}

Sayhi();

// Example 2: With Parameters

function prameter(name){
    console.log("Hello ",name) // Hello ANU
}

prameter("ANU");
prameter("DEEPANSHU");

// Example 3: With Return

function add(a,b){
    return a + b;
}
let ans = add(7,1);
console.log(ans);

// Example 4: Default Parameters

function Default(name1 = "guest"){
    console.log("Hello ",name1);
}

Default();//agar argument doge to vhi console hoga nhi to default value guest print hoga

// 4. Rest Parameters

function sum(...number){
    return number.reduce((a,b) => a+b,0);
}

console.log(sum(1,2,3,4,5)) // output => 15

// Example 6: Multiple Returns

function CheckAge(age){
    if(age < 18){
        return "Minor";
    }
    return "Aduly"
}

console.log(CheckAge(14));

// Example 7: Nested Functions

function outer(){
    function inner(){
        console.log("inner");
    }
    inner();
}

outer();

// Example 8: Function Ke Andar Function

function calculate(a,b){
    function addition(){
        return a + b;
    }
    function multiply(){
        return a * b;
    }

    return {
        sum :addition(),
        product:multiply()
    };
}

console.log(calculate(2,3));


// 🧠 ~~~~~~~~~~~~~~~~~~Function Expression Kya Hai?
// Part 1: Ek Line Mein
// Function Expression = Function ko ek VARIABLE mein store karna.

// Part 2: Syntax
// js
const greet = function() {
  console.log("Hello");
};

greet(); // "Hello"
// Dekha?

// const greet → variable

// = function() {} → function variable mein store ho gaya

// Yahi Function Expression hai.

// Part 3: Function Declaration vs Function Expression
// Function Declaration:
// js
function greet() {
  console.log("Hello");
}
greet();
// function keyword sabse pehle

// Naam greet function ke saath juda hua

// Function Expression: 
// js
const greet = function() {
  console.log("Hello");
};
greet();
// function keyword variable ke baad

// Function ka apna naam nahi (anonymous)

// Variable ka naam greet use hota hai

// Function Declaration → Poora Hoisted
// js
greet(); // ✅ "Hello"

function greet() {
  console.log("Hello");
}
// Pehle call kar sakte ho — kyunki function poora memory mein aa gaya.

// Function Expression → Sirf Variable Hoisted
// js
greet(); // ❌ TypeError

const greet = function() {
  console.log("Hello");
};
// Pehle call nahi kar sakte — kyunki sirf variable hoisted hai, function baad mein assign hota hai.

// Part 1: ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Arrow Function Kya Hai?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Arrow Function = Function likhne ka short tarika (ES6, 2015).

// Purana tarika:

// js
const greet = function() {
  console.log("Hello");
};
// Naya tarika (arrow function):

// js
const greet = () => {
  console.log("Hello");
};
// Dekha? function keyword hata, => (arrow) laga diya.

// Part 2: Syntax Ke 3 Forms

// Form 1: No Parameters
// js

const greet = () => {
  console.log("Hello");
};
// () → parameters (khaali)

// => → arrow

// { } → body


// Form 2: One Parameter (Parentheses Optional)
// js
const greet = name => {
  console.log("Hello " + name);
};
// Ya:

// js
const greet = (name) => {
  console.log("Hello " + name);
};
// Dono same hain. Ek parameter ke liye () optional hai.

// Form 3: Multiple Parameters (Parentheses Required)
js
const add = (a, b) => {
  return a + b;
};
// Multiple parameters ke liye () zaroori hai.