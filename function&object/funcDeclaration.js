// FUNCTION DECLARATION KA MATALB HOTA HAI EK TRIKE SE FUNCTION BANANA JISME FUNCTION KEYWORD KA USE HOTA HAI

// BASIC SYNTAX

function FunctionName(){
    // function body

    return value; // optional
}

// ============= example ===========

function greet (name){
    return `hello ${name}`;
}

console.log(greet("Deepanshu")); // hello deepanshu

//  ========================================= FUNCTION EXPRESSION ==================================

// FUNCTION EXPRESSION KA MATLAB HOTA HAI JAB HUM FUNCTION KO EK VALUE KI TRH VARIABLE ME STORE KRTE HAI 

const functionName = function(parameter){
    //function body
 };

// ================================= parameter and return =========================

// parameter wo variable hainn jo fucntion define krte time parantheses() mai likhe jaate hai ye function ko input recieve krne ke kaam krte hai

function functionName(parameter1,parameter2){
    //function body
}

// ========================== example =======================

function add(a,b) { // a aur b parameter hai 
    return a + b
}

add(2,5);// 2 aur 5 argument hai 


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Default parameter !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111

// agar function call krte time koi arguument na diya jaaye to function pehle se di hui default vlaue use krta hai

// without default parameter
function heelo(word){
    console.log(`hello ${word}`)
}

heelo(); // hello undefined kyoki koi bhi value pass nhi ki 

// with default parameter

function gello2(name = "guest"){
    console.log(`hello ${name}`)
}

gello2(); // hello guest kyoki agar koi parameter nhi hai to default use hoga  aur agr value pass krdo to value hi print hogi na ki default parameter



// ================================ Return statement ====================================

// return function se value wapas bhejta hai aur function ko immidiatly stop kar deta hai

// Basic syntax

function substract(a,b){
    return a - b;
}

const result = substract(5,3);
console.log(result); // 2

// ======================== calling a function ========================

// function ko chlaana ya execute krna hi function calling khlaata hai

function NamePrint(name){
    console.log(`your name is ${name}`)
}

NamePrint(deepanshu) // function calling


// ########################################### console.log() vs return ##################################3

// console.log() sirf screen me value dikhaata hai
// return value ko function ke bahar wapas bhejta hai

function add2(){
    console.log(10 + 20);
}

add2(); // 30

function add3(a,b){
    return a + b;
}

let result1 = add3(2,3);
console.log(result1);

