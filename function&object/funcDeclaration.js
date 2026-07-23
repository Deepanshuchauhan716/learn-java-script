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


// ================================ Return statement ====================================

// return function se value wapas bhejta hai aur function ko immidiatly stop kar deta hai

// Basic syntax

function substract(a,b){
    return a - b;
}

const result = substract(5,3);
console.log(result); // 2


