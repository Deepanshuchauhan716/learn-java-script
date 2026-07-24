// ye define karta hai ki varibale kahan accssible hoga 

// fucntion scope ka matlab hai ki har function apna khud ka ek enviroment create krta hai variable jo function ke andr declare hote hai vo sirf function ke andr hi accssible hote hai bahar nhi

function MyFun(){
    let msg = "Welcome deepanshu";
    console.log(msg) // ✅✅✅ accssible
}
MyFun();
//console.log(msg) // ❌❌ refrence error

// VAR VS LET, CONST IN FUNCTION SCOPE

// var se declare kiya gya variable poore functionn main accssible hai chae wo block ke andr kyun na ho

function testvar(){
   if(true){
    var x  = 20; // block ke andr declare 
   }
   console.log(x); // 20 poore function me use
}
testvar();

// let and const block scoped hai isliye vo sirf us block mein accssible hai jhaan declare hota hai

function testlet(){
    if(true){
        let y = 30;
        const z = 20;
    }

    console.log(y) //error
    console.log(z) //error
}

testlet();


// ###########################  GLOABAL SCOPE ###########################33
// jo variable ya function kisi bhi function ya block ke bahar access kiya jaata hai use global scope khte hai

// global = sbke liye available

// example

let name3= "deepanshu";

function name2(){
    console.log(name)
}

name2();
console.log(name3) // deepanshu // deepanshu kyoki name ek global scope me hai use koi bhi acceess kr skta hai

//  function bhi global scope me ho skta hai''

function hell(){
    console.log("Hell");
}
hell();

// ########################## LOCAL scope ####################

// jo variable kisi function ke andr decalre hota hai use sirf usi function ke andr access kiya ja skta hai ise local ya function scope khte hai

// local = sirf apne ghr(function) ke andr


// example 

function example(){
    let nameD = "Deepanshu";
    console.log(nameD);
}

example(); // deepanshu

// nameD sirf example function ke andr exist krta hai agar hum use bhar access krne ki kosis krenge to error aayega

// ############################  BLOCK scope ###############

// js me {} ko block scope khte hai

{
    console.log("Hello");

}

// ye  block scope hai
// jo variable let ya const se kisi block ke andr declare hota hai use sirf usi block ke nadr access kiya ja skta hai bahar nhi

// Example

{
    let name = "Deepanshu"
    console.log(name);
}

// name sirf block ke andr hi acess kiya ja skta hai agar bhar krne ki kosis krrenge to error aayega

// const bhi ek block scope hai

{
    const ger = 20;
    console.log(ger); // 20
}

// EXCEPTION !!!!!!!! var ek block scope follow nhi krta hai

{
    var x = 10;
}

console.log(x); // 10 because var ek global scope hai

// ⭐⭐⭐⭐⭐ LEXICAL SCOPE ⭐⭐⭐⭐⭐

// lexical scope ka matlab hota hai ki code kha likha gya hai
// js me ek function apne parent (outer) scope ke variable ko access kr skta hai is behaviour ko lexical scope khte hai

// Example

let num = 10;

function outer(){
    let num1 = 20;

    function inner(){
         let num2 = 30;

         console.log(num)
         console.log(num1)
         console.log(num2)
    }
    inner();
}

outer();

// output = 10,20,30