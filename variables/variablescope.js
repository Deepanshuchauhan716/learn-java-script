// varibale scope 

//Program ke kis area me koi variable accessible ho sakta hai 
                    // or
// variable ko kahan se access kar skte hai aur kahan se nhi 

// 3 types of scope

// 1 => gloabal scope
// 2 => block scope
// 3 => function scope

// 1 ===> GLOBAL SCOPE 
// jo variable sab jagah use ho sakta hai 

let name = "deepanshu";

function greet (){
    console.log(name);
}

console.log(name);

greet();
 
// 2 ===> BLOCK SCOPE 
// BLOCK MEANS { } KE ANDR KA AREA

if(true){
    let age  = 20;
}
console.log(age);

//error kyoki age block ke andr hai isliye hum use {} block ke bhar use nhi kr skte 

// 3 ===> FUNCTION SCOPE 
// function ke andr bnaya gya variable sirf usi function ke andr use hota hai

function test(){
    let city = "delhi";
    console.log(city);
}

test();
console.log(city);

// output ==> 
    // delhi
    // error 