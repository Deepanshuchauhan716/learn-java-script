// IF EK CONDITION STATEMENT HOTI HAI 
// AGAR CONDITION TRUE HAI TO CODE CHALWAO WARNA SKIP KRDO

// REAL LIFE EXAMPLE
// AGAR BAARISH HUI -> TO CHATA LE JAAO

// SYNTAX
// if(condition){
//  ye code tbhi chlega jab condition true hogi
// }

//  ==================== example 1 ===============

let price = 2000;

if(price >= 1800){
    console.log("expensive");
}

// ===================example 2 ======================

let age = 15;
if(age <= 18){
    console.log("baby");
}

// truthy value==================

// if(100)
// if("Hello")
// if([])
// if({})

// falsy value ==================

// if(0);
// if("")
// if(null)
// if(undefined)
// if(NaN)

// MULTIPLE STATEMENT

let name = "roahan";
let marks = 90
if(marks >= 30){
    console.log(`${name} pass`);
    console.log("congratulation");
    console.log("next class");
}

// ====================================NESTED IF==================================

let age1 = 20;
let hasId = true;

if(age1 >= 18){
    if(hasId){
        console.log("entry");
    }
}

// ========================================== ELSE ===================================

// else ka matlab hota hai agr if ki condition flase hui to ye code chlao
// if -> true ke liye 
// else -> false ke liye

let rain = false;
if(rain){
    console.log("rain")
}else{
    console.log("no rain")
}