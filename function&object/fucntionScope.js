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