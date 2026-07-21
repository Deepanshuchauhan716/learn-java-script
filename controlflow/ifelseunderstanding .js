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

let age2 = 11;
if(age >= 18){
    console.log("vote!!")
}else{
    console.log("no vote!!")
}


let password = 1234;
if(password == "1234admin"){
    console.log("login")
}else{
    console.log("wrong password")
}

// ================================== ELSE IF ================================

// else if ka matlab hota hai ki agar phli condition false hui to doosri check kro basicaaly else if ka use tabh hota hai jab tumhare pass ek se jaada condition hoti hai

// =========================== example =====================

let marks2 = 85;

if(marks2 >= 90){
    console.log("A")
}
else if(marks2 >= 75){
    console.log("B")
}
else if(marks2 >= 50){
    console.log("C")
}
else{
    console.log("fail");
}

// ====================== example ======================

let day = 7;
if(day == 1){
    console.log("monday");
}
else if(day == 2){
    console.log("tuesday");
}
else if(day == 3){
    console.log("wedsday");
}
else if(day == 4){
    console.log("thursday");
}
else if(day == 5){
    console.log("friday");
}
else if(day == 6){
    console.log("saturday");
}
else if(day == 7){
    console.log("sunday");
}
