// variable ek container hota hai jisme hum data store kar skte hai 
// REAL LIFE EXAMPLE

// Bottle -> pani store krna 
// bag -> book store krna 

// vese hi variable data store krte hai 

// JS ME VARIBALE BNANANE KE 3 TRIKE HOTE HAI 

// 1 => let (most commom)
// 2 => var (old)
// 3 => const (if value doesn`t change in life)

var age  = 20 ;
let age = 30;
const pi = 3.14;

// VARIABLES KYA STORE KRTE HAI

// 1 => number 
// 2 => string
// 3 => boolean
// 4 => array
// 5 => object

let number = 20;
let string = "deepanshu";
let boolean = true;
let array = ["apple","banana","mango"]
let object = {
    name:deepanshu,
    age : 20
};

// DIFFERENCE BETWEEN LET CONST

// LET
// you can change value 

let score  = 50;
score = 100;
console.log(score); // output => 100 valid✅

// CONST 
// you can not change the value 

const score = 50;
score = 100; // error ❌

// IMPORTANCE = > valid and invalid name of variables

// In js you can start variable name _ , $ , letter .
// In js you can not  start variable name with number .
 
let $name = "deepanshu"; // valid
let _age = 20; // valid
let name = "harish" // valid 

//let 34age = 34 // invalid
